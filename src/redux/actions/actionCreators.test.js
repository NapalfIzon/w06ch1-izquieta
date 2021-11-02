import { loadTasksAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a actionCreators,", () => {
  describe("When we use the loadTaskAction,", () => {
    test("Then it should return the list tasks received", () => {
      const temportalTask = [
        {
          id: 1,
          text: "Things 1",
          isEnabled: true,
        },
        {
          id: 2,
          text: "Things 2",
          isEnabled: false,
        },
        {
          id: 3,
          text: "Things 3",
          isEnabled: false,
        },
      ];
      const expected = {
        type: actionTypes.loadTasks,
        tasks: temportalTask,
      };

      const result = loadTasksAction(temportalTask);

      expect(result).toEqual(expected);
    });
  });
});
