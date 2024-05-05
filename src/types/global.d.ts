// https://bobbyhadz.com/blog/typescript-make-types-global
// To declare global types in TypeScript:

// Create a global.d.ts file and declare types in the global namespace.
// Add types or interfaces that need to be globally accessible.
// Make the file a module by using export {}.
export {};
declare global {
  interface Coordinate {
    x: number;
    y: number;
  }
  interface Player {
    id?: number;
    nickName: string;
    picture?: string;
    uniformNumber?: number;
    role: number;
    team?: {
      id: number;
      name: string;
    };
  }
  interface Shape {
    name: string;
    coordinates: Coordinate[];
    width: number;
    height: number;
  }

  interface Tile {
    shapeName: string;
    color: string;
    position: Coordinate;
  }

  interface Board {
    width: number;
    height: number;
    tiles: Tile[];
  }
  interface UserCore {
    email: string;
    full_name: string;
    picture: string;
  }
  interface UserFull extends UserCore {
    clientId: string;
    access_token: string;
  }
  interface ReturnCount {
    totalCount: number;
  }
}
