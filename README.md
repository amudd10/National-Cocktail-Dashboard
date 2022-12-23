# National-Cocktail-Dashboard

The goal of the project is to display multiple and interactive visulizations, this includes an interactive map of popular drinks across the United States.

The Javascript-Leaflet library, HTML, Javascript, Webscrape Python, AWS S3, AWS API Gateway, and AWS Lambda were used in the project.

The project was divided into steps with different levels of complexity.

# Data Architecture
![Project 3](https://user-images.githubusercontent.com/111074755/209232254-7a81423a-5382-4bc9-8a1c-b76e90633057.png)

## Step 1: Data Sources and Exteraction 

Data set 1: Source: Most Popular Cocktail in Every State (https://www.eatthis.com/favorite-cocktail-every-state/) 
Tools used for exteraction: Beautiful Soup, Web scrape, Python

Data set 2: Source: Shaken Not Stirred API (https://github.com/juanroldan1989/shaken_not_stirred/blob/master/Gemfile)
Tools used for exteraction: Python

Data set 3: Source: Alcohol Consumption US CSV (Kaggle - https://www.kaggle.com/datasets/linzey/alcohol-consumption-us?resource=download)
Tools used to exteraction: Python

## Step 2: Data Transormation

Python and its library Pandas were used to transform the API response as well as the web scrape response. The data was also converted to a JSON format using Pandas. 

## Step 3: Data Storage

The data was loaded into a few of the Amazon S3 buckets. The reason S3 was picked here is:
- S3 can easily handle a variety of file formats. The data we want to use is in JSON format which is why the S3 bucket was picked.
- The data does not need to be structured.
- S3 can easily interact with other AWS services, by simply using the S3 bucket URL.

## Step 4: Front and Back-End Connectivity 

In order for the front-end to interact with the back-end to produce interactive visualizations:
- AWS Lambda and AWS API Gateway were used. The logic here is using lambda to connect to our database (S3) 
- then create an event driven lambda function to feed customized data through the API Gateway 
- which then a URL is produced to use the front-end.

## Step 4: User Interface

In order to produce visuals, JavaScript and its library LeafLet were used. Here a map was created to show the popular drinks for each state in the United States. 

## Roadblocks
* The cocktail is provided data that was incomplete and included errors. "Gin fizz" and "vodka fizz" were returned as "bucks fizz" from api, for instance. It also didn't take "~'. 
* Had to split the ingredients into individual columns because api returned ingredients in one column. 
* Api return data with special characters really strange for ingredients. 
* Struggles with drilling into the data in the lambda function and testing without interfering with front-end work.
* Data jsonified in dictionary within dictionary format. Challenging to use on the front-end.
