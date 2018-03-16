import {orderBy} from "lodash";
import {_api_key,language,category,articles_url} from '../config/rest_config';

export async function getArticles() {
  console.log("inside services getarticle");
  try{
        /*let articles=await fetch('${articles_url}?country=${country}&category=${category}&language=${language}',{
            headers:{
                'X-API-KEY':api_key
            }
        });*/
    console.log('inside try getarticle');
    let articles = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6eeeb11e1b6a4e40bb4477f12b35d003');
    let result = await articles.json();
    console.log("data fetched");
    return result.articles;
 
    // return orderBy(result.articles, 'publishedAt', 'desc');
  } catch(error) {
      throw error;
  }
}