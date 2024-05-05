import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './Labeling.scoped.scss';
import { MetaData, ConversationArray, PageInfo } from '../utils/commonTypes';

import { Grid, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Title from '../components/text/Title';
import Description from '../components/text/Description';
import Pagination from '../components/viewer/Pagination';
import { Viewer } from '../components/viewer/Viewer';
import ToggleButton from '../components/button/ToggleButton';
import { parsingTsvFile } from '../utils/parsing';
import { mergeConversationArray } from '../utils/export';

function Labeling() {
  // global props
  const theme = useTheme();

  // data
  const [conversationArray, setConversation] = useState<ConversationArray>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({ total: 0, current: -1 } as PageInfo);
  const [metaData, setMetaData] = useState<MetaData>({ title: '', description: '', categories: [] });
  const [isAutoNext, setIsAutoNext] = useState<boolean>(false);
  const [isTextFieldFocused, setIsTextFieldFocused] = useState<boolean>(false);

  // computed
  const valueArray = useMemo(() => {
    return metaData.categories.map(category => category.value);
  }, [metaData]);
  const currentConversation = useMemo(() => {
    if (conversationArray[pageInfo.current]) {
      return conversationArray[pageInfo.current];
    } else {
      return { reply: '', context: '', value: null, comment: '' };
    }
  }, [conversationArray, pageInfo]);
  const incompleteIndexArray: number[] = useMemo(() => {
    const resultArray: number[] = [];
    conversationArray.forEach((conversation, index) => {
      if (!conversation.value) {
        resultArray.push(index);
      }
    });
    return resultArray;
  }, [conversationArray]);

  // Method
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = async e => {
      const text = e?.target?.result;
      if (typeof text === 'string') {
        const paredData = parsingTsvFile(text);
        if (paredData.error) {
          alert(paredData.error);
        } else if (paredData.metaData && paredData.conversation) {
          setMetaData(paredData.metaData);
          setConversation(paredData.conversation);
          setPageInfo({ total: paredData.conversation.length, current: 0 });
        }
      } else {
        alert('파일 형식이 맞지 않음');
      }
    };
    if (event && event.target && event.target.files) {
      reader.readAsText(event.target.files[0]);
    }
  };
  const handleOutput = () => {
    const element = document.createElement('a');
    const donwloadContent = mergeConversationArray(conversationArray);
    const file = new Blob([donwloadContent], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'output.tsv';
    document.body.appendChild(element);
    element.click();
  };
  const handlePageEvent = (event: number) => {
    setPageInfo(state => {
      return { ...state, current: state.current + event };
    });
  };
  const goNextUnlabled = () => {
    if (!incompleteIndexArray || incompleteIndexArray.length == 0) return;
    function getNextIndex(current: number, incompleteIndexArray: number[]) {
      for (const newIndex of incompleteIndexArray) {
        if (newIndex > current) {
          return newIndex;
        }
      }
      return incompleteIndexArray[0];
    }
    const nextIndex = getNextIndex(pageInfo.current, incompleteIndexArray);
    setPageInfo({ ...pageInfo, current: nextIndex });
  };
  const handleIsAutoNextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutoNext(event.target.checked);
  };
  const handleCategoryChange = (value: string | null) => {
    const updatedArray = conversationArray.map((conversation, index) => {
      if (index == pageInfo.current) {
        return { ...conversation, value };
      }
      return conversation;
    });
    setConversation(updatedArray);
    if (!value) return;
    if (isAutoNext && pageInfo.current + 1 != pageInfo.total) {
      setPageInfo({ ...pageInfo, current: pageInfo.current + 1 });
    }
  };
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedArray = conversationArray.map((conversation, index) => {
      if (index == pageInfo.current) {
        return { ...conversation, comment: event.target.value };
      }
      return conversation;
    });
    setConversation(updatedArray);
  };
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isTextFieldFocused) return;

      const canClickLeft = pageInfo.current > 0;
      const canClickRight = pageInfo.total != pageInfo.current + 1;
      if (event.key == 'ArrowLeft' && canClickLeft) {
        handlePageEvent(-1);
      } else if (event.key == 'ArrowRight' && canClickRight) {
        handlePageEvent(1);
      } else if (valueArray.includes(event.key)) {
        handleCategoryChange(event.key);
      }
    },
    [isTextFieldFocused, pageInfo],
  );

  // watch + immediate + destroyed
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <Grid className='labeling__row labeling__row--file' container alignItems='center' justifyContent='center'>
        <Grid item md={8}>
          <label className={`input input--${theme.palette.mode}`} htmlFor='input-file'>
            업로드
          </label>
          <input id='input-file' type='file' name='file' onChange={handleInput} style={{ display: 'none' }} />
        </Grid>
        <Grid container item md={4} justifyContent='end'>
          <Button
            variant='contained'
            size='small'
            onClick={handleOutput}
            endIcon={<SendIcon />}
            disabled={metaData.categories.length == 0}
          >
            내보내기
          </Button>
        </Grid>
      </Grid>
      <Grid className='labeling__row labeling__row--meta' container justifyContent='center'>
        <Title text={metaData.title} />
      </Grid>
      <Grid className='labeling__row labeling__row--meta' container justifyContent='start'>
        <Description text={metaData.description} />
      </Grid>
      <Grid className='labeling__row' container justifyContent='center'>
        <Viewer conversation={currentConversation} />
      </Grid>
      <Grid className='labeling__row labeling__row--control' container justifyContent='center'>
        <Pagination total={pageInfo.total} current={pageInfo.current} onClick={handlePageEvent} />
      </Grid>
      <Grid className='labeling__row labeling__row--control' container justifyContent='start'>
        <FormControlLabel
          control={<Checkbox checked={isAutoNext} onChange={handleIsAutoNextChange} />}
          label='자동으로 넘기기'
        />
      </Grid>
      <Grid className='labeling__row labeling__row--control' container alignItems='center' justifyContent='center'>
        <Grid item md={6}>
          <span> 레이블 안된 대화수: {incompleteIndexArray.length}</span>
        </Grid>
        <Grid item md={6}>
          <Button
            variant='contained'
            size='small'
            onClick={goNextUnlabled}
            disabled={incompleteIndexArray.length == 0}
            endIcon={<ArrowForwardRoundedIcon />}
          >
            레이블 없는 대화
          </Button>
        </Grid>
      </Grid>
      <Grid className='labeling__row labeling__row--control' container justifyContent='center'>
        <ToggleButton
          categories={metaData.categories}
          onClick={handleCategoryChange}
          currentValue={currentConversation?.value}
        />
      </Grid>
      <Grid className='labeling__row labeling__row--control' container justifyContent='center'>
        <TextField
          variant='filled'
          label='참고사항 입력'
          size='small'
          fullWidth={true}
          value={currentConversation?.comment}
          onChange={handleCommentChange}
          onFocus={() => setIsTextFieldFocused(true)}
          onBlur={() => setIsTextFieldFocused(false)}
        />
      </Grid>
    </>
  );
}

export default Labeling;
