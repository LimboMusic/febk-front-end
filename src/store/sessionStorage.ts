/* eslint-disable @typescript-eslint/no-explicit-any */
// export const loadState = () => {
//     try {
//         const serializedState = sessionStorage.getItem('state');
//         if (serializedState === null) {
//             return undefined;
//         }
//         return JSON.parse(serializedState);
//     } catch (error) {
//         return undefined;
//     }
// };

// export const saveState = (state: any) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         sessionStorage.setItem('state', serializedState);
//     } catch (error) {
//         // Ignore write errors.a
//     }
// };

// sessionStorage.js
export const loadState = () => {
    try {
      const serializedState = sessionStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('state', serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
  };
  