import React,{PureComponent} from 'react';
import {TouchableOpacity, Linking, Button} from 'react-native';
import {Body,Text, Thumbnail,View} from 'native-base';
import TimeAgo from './time';
export default class ListDataItem extends PureComponent{
    
    constructor(props)
    {
        super(props);
        this.data=props.data;
    };
    check(words)
    {
        if(words==null)
        {
            return ' ';
        }
        return words.toString();
    };
    open(ur)
    {
        Linking.canOpenURL(ur.toString()).then(supported=>
        {
            if(supported)
            {
                Linking.openURL(ur.toString());
            }  
            else
            {
                alert('Error: cannot open this url');
            } 
        });
    };
    
    render()
    {
        return(
            <TouchableOpacity style={{flexDirection:'row'}} activeOpacity={0.5} onPress={()=>{Linking.openURL(this.data.url.toString());}} >
                   
                
                <Thumbnail style={{backgroundColor:'#eee', alignSelf:'center'}} square large source={{
                    cache:'force-cache', 
                    uri:this.data.urlToImage!=null?this.check(this.data.urlToImage): 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg?h=350&auto=compress&cs=tinysrgb' }}/>
                <Body>
                    <Text style={{fontSize:16}} numberOfLines={2}> {this.check(this.data.title)} </Text>
                    <Text note numberOfLines={3}> {this.check(this.data.description)} </Text>
                    <View style={{flex:1, flexDirection:'row', marginTop:8, marginLeft:8}} >
                        <Text note> {this.check(this.data.source.name)} </Text>
                        <TimeAgo date={this.data.publishedAt} />
                    </View>
                </Body>
                </TouchableOpacity>

        );
    }
}
/*

    open(ur)
    {
        Linking.canOpenURL(ur.toString()).then(supported=>
        {
            if(supported)
            {
                Linking.openURL(ur.toString());
            }  
            else
            {
                alert('Error: cannot open this url');
            } 
        });
    };
 <Button onClick={this.open(this.data.url)}/>
           
*/