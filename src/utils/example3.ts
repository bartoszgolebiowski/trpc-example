export type Response = ReturnType<typeof service>;
/*
    type Output = {
        status: string;
        description: string;
    }
*/
export const service = () => {
  return {
    status: "WAITING_FOR_DELIVERY",
    description: "Operation completed successfully",
  };
};
