const SDProject = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Synthetic data generation tool (with known distributions)</h2>
        <div className="mb-4 text-center text-xl">
            <div>python, Polars, pydantic, numpy</div>
            <div>
                <a href="https://github.com/kasztelmacko/alttab" className="text-blue-500 hover:underline">github</a>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex justify-center">
                <img src="OrderGenerator.png" alt="Description 1" className="w-full h-auto rounded-lg" />
            </div>
        </div>

        <div className="mb-4">
            <span className="font-semibold">Context:</span>
            <div>I often struggled to find sufficient datasets that matched my interests, particularly for learning about proper pricing and analyzing order time series. Unable to find many suitable datasets, I decided to create a generator. This generator uses <b>known distributions</b>—such as <b>yearly, monthly, daily, and hourly data</b>—and incorporates additional factors like <b>linear trends, seasonality</b>, and more to create comprehensive datasets.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Research:</span>
            <div>There are plenty of synthetic data generation tools available, but they all require existing data, which I couldnt find. While I understand that real-world market distributions are unknown, we can imagine any distribution, add some noise, and create our own unique distributions. I also realized it would be beneficial to create an <b>orders dataset</b> with items provided by the user. To incorporate more factors, these items can vary by <b>name, price, and popularity</b> (which influences the item distribution).</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Approach:</span>
            <div>I started the project by creating <b>periods</b> over which the orders could be distributed. These periods are built on a <b>modular basis</b>, with each one inheriting from a parent <b>Distribution class</b>. To properly handle data types, I used <b>Pydantic</b>, which allows for the creation of schemas that resolve issues at runtime. Once the periods were set up, I experimented with adding <b>noise</b> (which can be parameterized with standard deviation), as well as other factors like linear trends and variations based on the day of the month or week. Finally, I added an <b>Item Distribution class</b>, which distributes orders for a given period across the items listed by the user.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Features:</span>
            <div>
                <ul>
                    <li><b>- Distribute orders into Year, Month, Day, Hour</b></li>
                    <li><b>- Plot distributions</b></li>
                    <li><b>- Create an orders dataframe with your products</b></li>
                    <li><b>- Distributes products based on their popularity</b></li>
                    <li><b>- Allow one order to have multiple items</b></li>
                </ul>
            </div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Outcome:</span>
            <div>A <b>python software</b> that allows to create <b>structure time series datasets</b> and export them</div>
        </div>
        </div>
    );
};

export default SDProject;
