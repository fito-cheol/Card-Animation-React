import { MetaData, Conversation } from './commonTypes';

function instanceOfMetaData(object: any): object is MetaData {
  // TODO; catogoreis 안에  name value에 대해서 확인하기
  // TOOD: type Check하기
  return 'title' in object && 'description' in Object && 'categories' in Object;
}

interface ParseSuccess {
  metaData: MetaData;
  conversation: Conversation[];
  error?: never;
}
interface ParseFail {
  metaData?: never;
  conversation?: never;
  error: string;
}

type ParseReturn = ParseSuccess | ParseFail;

function parsingTsvFile(fileContent: string): ParseReturn {
  const textArray = fileContent.split('\n');
  if (textArray.length < 2) {
    return { error: '파일형식 맞지 않음 - 2줄 이상의 데이터 필요' };
  }
  const jsonParser = (jsonString: string): MetaData => JSON.parse(jsonString);
  let metaData;
  try {
    metaData = jsonParser(textArray[0]);
  } catch (error) {
    return { error: '파일형식 맞지 않음 - 첫줄이 json형태가 아닙니다 ' };
  }
  if (instanceOfMetaData(metaData)) {
    return { error: '파일형식 맞지 않음 - 첫줄이 형식에 맞지 않습니다' };
  }
  const conversation: Conversation[] = [];
  textArray.slice(1).forEach(line => {
    const conv = seperateTab(line);
    // 빈줄 제거
    if (conv) {
      conversation.push(conv);
    }
  });

  return {
    metaData,
    conversation,
  };
}

function seperateTab(line: string): Conversation | undefined {
  const sepratedLine = line.split('\t');
  if (!sepratedLine || sepratedLine.length != 2) {
    return;
  }
  return {
    context: sepratedLine[0],
    reply: sepratedLine[1],
    value: null,
    comment: '',
  };
}

export { parsingTsvFile };
