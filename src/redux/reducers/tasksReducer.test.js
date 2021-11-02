import actionTypes from "../actions/actionTypes";
import tasksReducer from "./tasksReducer";

describe("Given a tasksReducer reducer", () => {
  describe("When it receceives a empty list of tasks and a load action with 3 new tasks", () => {
    test("Then it should a new tasks list with the three tasks received", () => {
      const initiaTasks = [];
      const expected = [
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
      const loadAction = {
        type: actionTypes.loadTasks,
        tasks: expected,
      };

      const result = tasksReducer(initiaTasks, loadAction);

      expect(result).toEqual(expected);
    });
  });
});
