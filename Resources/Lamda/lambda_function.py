import json
import boto3

s3 = boto3.client('s3')

by_state = s3.get_object(
    Bucket='national-cocktail-database',
    Key='JSON/by_state.json')["Body"].read()

recipes = s3.get_object(
    Bucket='national-cocktail-database',
    Key='JSON/recipes.json')["Body"].read()
    
#consumption_all_years = s3.get_object(
    # Bucket='national-cocktail-database',
    # Key='JSON/consumption_df_clean.json')["Body"].read()
    
consumption_2014 = s3.get_object(
    Bucket='national-cocktail-database',
    Key='JSON/consumption_by_year/consumption_2014_clean.json')["Body"].read()

consumption_2015 = s3.get_object(
    Bucket='national-cocktail-database',
    Key='JSON/consumption_by_year/consumption_2015_clean.json')["Body"].read()
    
consumption_2016 = s3.get_object(
    Bucket='national-cocktail-database',
    Key='JSON/consumption_by_year/consumption_2016_clean.json')["Body"].read()

by_state = json.loads(by_state)
recipes = json.loads(recipes)
#consumption_all_years = json.loads(consumption_all_years)
consumption_2014 = json.loads(consumption_2014)
consumption2015 = json.loads(consumption_2015)
consumption_2016 = json.loads(consumption_2016)

def lambda_handler(event, context):
    print("event: ", event)
    
    response = [by_state, recipes, consumption_2014, consumption2015, consumption_2016]
    
    return builtResponse(200, json.dumps(response))

def builtResponse(statusCode, responseBody=None):
    response = {
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,GET'
        },
        'statusCode': statusCode
    }
    if responseBody:
        response['body'] = responseBody
    return response
    


