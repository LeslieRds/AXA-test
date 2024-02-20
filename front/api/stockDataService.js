export const fetchStockData = async () => {
  try {
    const response = await fetch('/api/stocks');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch stock data:", error);
    throw error;
  }
};
