const {
  ERR_TASK_MANAGER_INVALID_TITLE,
  ERR_TASK_MANAGER_INVALID_DESCRIPTION,
  ERR_TASK_MANAGER_INVALID_IS_COMPLETION,
  ERR_TASK_MANAGER_DEFAULT,
} = require("./errorCodes");

const handleValidationError = (errors) => {
  const errorResponse = errors?.errors?.map((error) => {
    console.log(error);
    if (error?.path == "description") {
      return {
        errorCode: ERR_TASK_MANAGER_INVALID_DESCRIPTION,
        errorMessage: error?.msg,
      };
    } else if (error?.path == "title") {
      return {
        errorCode: ERR_TASK_MANAGER_INVALID_TITLE,
        errorMessage: error?.msg,
      };
    } else if (error?.path == "isCompletion") {
      return {
        errorCode: ERR_TASK_MANAGER_INVALID_IS_COMPLETION,
        errorMessage: error?.msg,
      };
    } else {
      return {
        errorCode: ERR_TASK_MANAGER_DEFAULT,
        errorMessage: error?.msg,
      };
    }
  });

  return errorResponse;
};

module.exports = { handleValidationError };
