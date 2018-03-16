import React, { Component } from 'react';
import {StyleSheet, Text, ActivityIndicator,View,Alert, FlatList,TouchableOpacity} from 'react-native';
import { Container, Header, Button,Body, Title, Content,List,ListItem,Left } from 'native-base';
import ListDataItem from '../components/list_item';
import {getArticles} from '../services/news';
import {connect} from 'react-redux';
import {FETCH_NEWS, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILED } from '../actions/news';
const mapStateToProps = ({news}) => {
  const {
    newsheadlines, loading
  } = news;
  return {
    newsHeadlines: newsheadlines,
    isLoading: loading
  }
}
const mapDispatchToProps =(dispatch)=> {
  return{
    getNews : () => {
    dispatch({
      type: FETCH_NEWS,
    });
  },
  };
};
class HomeScreen extends Component {
  constructor(props)  {
    super(props);
  }
  
  componentDidMount() {

    console.log('action dispatched from home');
    const {getNews} = this.props;
    getNews();
    
    /* getArticles().then((data) => {
      console.log(data);
      this.setState({
        isLoading: false,
        data: data,
      })
    }).catch(err => {
      console.log("ERROR ", err.stack);
    }); */
  }
  
  /*extractData(item) {
    return item.publishedAt;
  }*/
         
    render(){
      
      const ViewGeneric = this.props.isLoading ? (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <ActivityIndicator animating={this.props.isLoading}/>
          <Text style={{marginTop:8}}>Please Wait </Text>
        </View>
      ) : ( <List 
        dataArray={this.props.newsHeadlines}
        renderRow={(item)=>{
            return(
              <ListItem> 
                  <ListDataItem data={item} />
              </ListItem>
        
            );
          }
        } />
      );
      return (
              <View style={{flex:1}}>
                <View style={styles.container}>
                    <View style={{flex:1}}>
                        <Text style={styles.header}> News Express</Text>
                    </View>
                    <View style={{flex:4, flexDirection:'row'}}>
                    <TouchableOpacity style={styles.touch} onPress={()=>alert('Business News')}>
                        <Text>Business</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={()=>alert('Entertainment News')}>
                        <Text>Entertainment</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={()=>alert('Entertainment News')}>
                        <Text>Technology</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={()=>alert('Entertainment News')}>
                        <Text>Sports</Text>
                    </TouchableOpacity>
                    </View>
                </View>  
                <View style={{flex:10}}>
                  {ViewGeneric}
                </View>
              </View>
            
      );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26633e',
    paddingLeft:10,
    paddingRight:40,
    justifyContent:'flex-end',
    flexDirection:'row',
  },
  header:{
    fontWeight:'bold',
    fontSize:15,
    color:'white',
  },
  touch:{
    flex:1,
    padding:10,
    justifyContent:'flex-end',
    alignItems: 'center',
  }

});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);



/*<List
dataArray={this.state.data}
renderRow={(item)=>{
    return(
      <ListItem> 
          <ListDataItem data={item} />
      </ListItem>

    )
  }
} /> 

<Left>
              <Title children="News App" />
              </Left>*/