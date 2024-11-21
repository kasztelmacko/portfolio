const ULProject = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Unsupervised Learning Projects</h2>
            <div className="mb-4 text-center text-xl">
                <div><b>R, ggplot, dplyr, cluster, arules</b></div>
                <div>
                    <a href="https://github.com/kasztelmacko/Clustering-project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Clustering Project
                    </a>
                </div>
                <div>
                    <a href="https://github.com/kasztelmacko/Dimension-Reduction-project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Dimension Reduction Project
                    </a>
                </div>
                <div>
                    <a href="https://github.com/kasztelmacko/Association-Rules-project" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Association Rules Project
                    </a>
                </div>
            </div>

            <div className="mb-4">
                <span className="font-semibold">Context:</span>
                <div>We were required to submit three projects focusing on <b>unsupervised learning methods</b>, including <b>clustering</b>, <b>dimensionality reduction</b>, and <b>association rules</b>. These projects had to be completed in <b>R</b> and were designed to answer specific questions we posed. For my projects, I chose <b>image clustering</b> to analyze movie scenes and classify them as either positive or negative, <b>Principal Component Analysis (PCA)</b> to assess employee satisfaction using a high-dimensional dataset, and <b>association rules</b> to track which hashtag combinations lead to more likes on social media.</div>
            </div>
            <div className="mb-4">
                <span className="font-semibold">Research:</span>
                <div>In all of the projects, the goal was to support our work with <b>scientific papers and definitions</b>. We were required to thoroughly research the topics we covered and build our models based on that foundation. For each project, we had to find an appropriate dataset, explore it, select the right methodologies, and apply them. Finally, we reported the results, ensuring they were backed by relevant research and analysis.</div>
            </div>
            <div className="mb-4">
                <span className="font-semibold">Approach:</span>
                <div><b>Clustering</b>: To cluster the images I used <b>K-means clustering</b>. We can analyse the number of clusters using <b>silhouette score</b>. It measures how well-defined and distinct the clusters are by providing a quantitative measure of how well each object has been classified. Then I plotted the image in the optimal number of clusters to inspect it. I then created a function which took the dominant color from each frame in the movie, and plotted it. With this distribution, I had a general understanding of which parts of the film were relatively positive and which were negative.</div>
                <div><b>PCA</b>: For the PCA project, I employed two methods: <b>Principal Component Analysis (PCA)</b> and a combination of <b>Multiple Correspondence Analysis (MCA)</b> with PCA. PCA is a widely used technique for dimensionality reduction that helps reduce the dimensionality of data while retaining most of the information. It works by creating new variables, called principal components, which are linear combinations of the original variables. These components are orthogonal and capture the maximum variance in the data. MCA, on the other hand, is a method designed for analyzing categorical data and helps identify patterns and relationships between categorical variables. When combined with PCA, MCA allows for the analysis of mixed datasets containing both continuous and categorical variables. The effectiveness of these methods was evaluated using a stopping rule based on eigenvalues to determine the optimal number of principal components to retain.</div>
                <div>For the <b>association rules</b> project, I used the <b>Apriori algorithm</b> to identify relationships between different hashtags. The Apriori algorithm begins by identifying frequent individual items in the dataset. An itemset is considered frequent if it appears in a minimum number of transactions, and from these frequent items, candidate itemsets are generated to find more frequent combinations. The paper also explored how certain post characteristics, such as hashtags, can impact the outcome in terms of likes and follows. The dataset I used was relatively small, containing only 100 posts, but it included 1,157 different hashtags. The study revealed that the most popular hashtags in the dataset were #machinelearning and #artificialintelligence, which was surprising, given that these hashtags are among the longest.</div>
            </div>
            <div className="mb-4">
                <span className="font-semibold">Outcome:</span>
                <div>The results of the projects were highly successful, with <b>two out of the three projects receiving the highest grades in the class</b>. The clustering project effectively classified movie scenes into positive and negative categories, the PCA project provided valuable insights into employee satisfaction, and the association rules project identified interesting patterns in social media hashtags. These outcomes demonstrated my ability to apply unsupervised learning methods effectively, backed by thorough research and sound methodologies.</div>
            </div>
        </div>
    );
};

export default ULProject;