const BASE_URL = "https://itx-frontend-test.onrender.com/api";

export const apiClient = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};