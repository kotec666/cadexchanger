import fetcher from "./fetcher";

export const sendMessage = async (data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ message: string }> => {
  return (
    await fetcher.post("contacts", {
      json: data,
    })
  ).json();
};
