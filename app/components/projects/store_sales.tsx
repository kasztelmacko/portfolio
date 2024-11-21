const SalesProject = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-3xl font-bold mb-2 text-center"><strong>Store Sales Forecasting</strong></h2>
        <div className="mb-4 text-center text-xl">
            <div><strong>XGBoost, Polars, Altair</strong></div>
            <div>
                <a href="https://github.com/kasztelmacko/kaggle_forecast/blob/main/notebook.ipynb" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub
                </a>
            </div>
        </div>

        <div className="mb-4">
            <span className="font-semibold">Context:</span>
            <div>Businesses often face the challenge of <b>forecasting product demand</b>, a task that’s crucial for ensuring optimal inventory management. This is especially true for <b>brick-and-mortar grocery stores</b>, where striking the right balance in inventory is key. Overestimate demand, and grocers are left with overstocked, perishable goods. Underestimate, and popular items sell out quickly, resulting in lost revenue and frustrated customers. More accurate sales forecasting, aided by machine learning, could help retailers meet customer demand by ensuring they have the right products at the right time in the right quantities.</div>
            <div>Current forecasting methods in retail are largely subjective and lack data-driven insights, making them difficult to automate. The problem becomes even more challenging as retailers expand to new locations with varying needs, introduce new products, respond to changing seasonal tastes, and navigate unpredictable marketing campaigns.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Research:</span>
            <div>Store sales forecasting involves <b>predicting the revenue or sales volume</b> for individual stores or retail networks over a specific time period, utilizing historical sales data alongside external factors such as holidays, events, economic trends, weather patterns, and even oil prices—especially in economies like Ecuador, where oil is a key driver. Forecasting models can provide both short-term predictions (daily or weekly sales) and long-term forecasts (monthly or yearly), which help businesses plan operations more strategically. Key challenges in store sales forecasting include accounting for trends (the rate of change in sales over time), seasonality (fluctuations in demand based on time of year), external influences (such as holidays or local events), and store-specific variability due to unique characteristics like location and customer demographics. These factors make it essential to develop tailored forecasts that reflect the specific needs of each store while incorporating broader economic influences.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Approach:</span>
            <div>I started by <b>loading and describing the data</b>, which helped me understand its overall structure and provided a solid foundation for future exploratory data analysis (EDA). Next, I focused on <b>cleaning the data</b> by changing column types and removing unnecessary columns. I then analyzed <b>total sales based on product families and stores</b>, which revealed that there were similar patterns across different categories and that the overall trend was positive. I also examined <b>sales trends by periods</b> (quarters, months, and weekdays) to identify the best-performing timeframes. This analysis led to the conclusion that the majority of sales occurred in the <b>Pichincha state, specifically in Quito</b>, highlighting the key area to focus on.</div>
            <div>After completing the EDA, I moved on to <b>feature engineering</b>. Initially, I handled missing oil price data by filling in the gaps with the previous days value. I then added <b>Fourier features</b>, which helped capture seasonal trends by representing the time series using a series of sine and cosine functions. To avoid dealing with raw date values in the model, I transformed the date column into separate columns for the <b>year, month, day, end-of-month, and payday</b>, making it easier for the model to interpret.</div>
            <div>With the prepared data, I built an <b>XGBoost model</b>, splitting the data into training and testing sets. I also developed an objective function to search for the best-performing hyperparameters for the model.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Features:</span>
            <ul>
                <li><b>- Data loading</b></li>
                <li><b>- Exploratory Data Analysis</b></li>
                <li><b>- Feature Engineering</b></li>
                <li><b>- XGBoost model</b></li>
            </ul>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Outcome:</span>
            <div>The model resulted in a <b>Root Mean Squared Logarithmic Error (RMSLE)</b> of 1.005 for the training data and 1.66 for the test data. While these results are a good starting point, they can be further improved by adopting an approach where sales are predicted separately for each shop or product family, allowing for more tailored and accurate forecasts.</div>
        </div>
        </div>
    );
};

export default SalesProject;
