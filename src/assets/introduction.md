## About Me

### Education

As an immigrant, I spent my first 2 years in the U.S. at **Mark Keppel High School**.  
Then I went to **Pasadena City College** and had wonderful three years there.  
With GPA 3.95/4, I transfered to **UCLA** for **my bachelor degree(GPA 3.54/4.0)** and **master degree(GPA 4.0/4.0)** .  

### Researches

#### Graph Neural Network Frameworks @ [UCLA SOLAR lab](http://systems.cs.ucla.edu/). 

Graph Neural Networks(GNN) are the emerging machine learning models which are able to make predictions on data with mathematical graph. 

**Motivation**: There is not a distributed scalable ML framework for GNNs now.   Tensorflow/Pytorch could not handle large graph as input data inefficiently. And they don't address graph-related issue such as graph partition, aggregation/scatter programming models in distributed settings.  

Traditional Graph processing frameworks like GraphX, Pregel lack support for tensor operations e.g. ReLu, Matrix Multiplications.

**Our goal**: Build a distributed and scalable system for various GNN models. We are also exploring the potential of *serverless services e.g. AWS Lambda* as our computation backend instead of the traditional GPU approach to see if we can achieve comparable perfomance and meanwhile keep the cost relatively low.  

For this project, I am working with  the PhD student [John Thorpe](http://web.cs.ucla.edu/~jothor/). My Advisor is  [Harry Xu](http://web.cs.ucla.edu/~harryxu/). 

### 