const PBNProject = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-3xl font-bold mb-2 text-center"><strong>Paint By Number creation tool</strong></h2>
        <div className="mb-4 text-center text-xl">
            <div><strong>Backend:</strong> (Python, FastAPI, scikit-learn, OpenCV, numpy)</div>
            <div><strong>Frontend:</strong> (JavaScript, React.JS)</div>
            <div>
                <a href="https://github.com/kasztelmacko/perpul" className="text-blue-500 hover:underline">GitHub</a>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex justify-center">
                <img src="/index_img.jpg" alt="Description 1" className="w-full h-auto rounded-lg" />
            </div>
            <div className="flex justify-center">
                <img src="/index_img_c.jpg" alt="Description 2" className="w-full h-auto rounded-lg" />
            </div>
            <div className="flex justify-center">
                <img src="/index_img_o.jpg" alt="Description 3" className="w-full h-auto rounded-lg" />
            </div>
        </div>

        <div className="mb-4">
            <span className="font-semibold">Context:</span>
            <div>During my <b>Unsupervised Learning</b> classes, I learned about clustering methods, which can also be applied to color dimensions within images. Inspired by this, I decided to implement a solution for paintings, which are essentially images with a limited range of colors. My project takes a picture as input and returns a <b>clustered version</b> of the image, along with an <b>outline</b> that features <b>numbers corresponding to the correct color</b> for each spot.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Research:</span>
            <div>I researched various clustering methods for image processing and found that <b>K-means and K-medians</b> are the most effective. To work with images in Python, I turned to <b>OpenCV2</b>, a library I was already familiar with. I also explored <b>edge detection techniques</b> to create the outlines needed for my paint-by-numbers (PBN) solution. Additionally, I investigated the business potential in this field and discovered that no company in the Polish market currently focuses exclusively on user-provided images. This presents a <b>unique niche opportunity</b> yet to be explored.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Approach:</span>
            <div>The project began with a simple algorithm that took an input image and returned its clustered version based on a few parameters. The initial results were promising, but they didn’t quite resemble a painting. To address this, I used <b>morphological closing operations</b> to smooth the facets and implemented a <b>small facet removal function</b> to eliminate small pixel clusters. Next, I focused on <b>edge detection</b>, which involved creating a mask over the image and marking pixels in black whenever the color changed from one pixel to the next. </div>
            <div>Finally, I started developing a <b>web application version</b> of the software. This required changing the input image to be an URL instead of a file, adding a <b>backend using FastAPI and Supabase DB</b>, and creating an <b>intuitive index page with React</b>.</div>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Features:</span>
            <ul>
                <li><b>- Upload, which takes user input image and turns it into its painting version + outline version - ready to print</b></li>
                <li><b>- Ability to adjust parameters, from number of clusters, minimum pixel size of areas, to font scale, colors and many others</b></li>
            </ul>
        </div>
        <div className="mb-4">
            <span className="font-semibold">Outcome:</span>
            <div>The project was a personal endeavor that taught me the <b>basics of image processing in Python</b> and the general principles of <b>software engineering</b>. By integrating the backend functionality with the frontend, it became my <b>first full-stack development project</b>. At one point, I considered turning this idea into a business due to its potential for high margins. However, I encountered challenges with finding a <b>cost-effective and accessible way to print the canvases</b>, which ultimately hindered the business potential.</div>
        </div>
        </div>
    );
};

export default PBNProject;
