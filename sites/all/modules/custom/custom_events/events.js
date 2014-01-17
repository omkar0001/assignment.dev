var user_ids = [];
var total_tweets = [];
var current_user_id;
var compute_tweet = function() {
  jQuery.ajax({
       url: "requestComputeTweet",
       dataType: "json",
       async:true,
       type:'POST',
       success:function(data) {
         jQuery("#total_tweets").replaceWith("<div id='total_tweets'>Total tweets: " + data['no'] + " </div>");
         
         jQuery("#highest_user").replaceWith("<div id='highest_user'>User who has highest tweets: " + data['user'] + " </div>");

         var content = '<div id="highest_domain"> Highest frequency domain: '; 
         for(var i =0; i<data['domain'].length;i++) {
           content = content + '' + data['domain'][i] + '</br>';
         }   

         content = content + '</div>';
         jQuery("#highest_domain").replaceWith(content);
         
       },
       complete:function() {
          /* enabling clicking in other tags untill completion of this request */
         
       }
    });
}

var store_tweet = function(tweet) {
  jQuery.ajax({
       url: "requestStoreTweet",
       dataType: "json",
       data:{'message':tweet},
       async:true,
       type:'POST',
       success:function(data) {
         compute_tweet();
         
       },
       complete:function() {
          /* enabling clicking in other tags untill completion of this request */
         
       }
    });
}
var store_user = function(user) {
  jQuery.ajax({
       url: "requestStoreUser",
       dataType: "json",
       data:{'uid':user['id'], 'screen_name': user['screen_name'], 'current_user':current_user_id},
       async:true,
       type:'POST',
       success:function(data) {
         
         
       },
       complete:function() {
          /* enabling clicking in other tags untill completion of this request */
         
       }
    }); 

};

var request_tweets = function(uid) {
  
  jQuery.ajax({
       url: "getTweetsRequest/" + uid,
       dataType: "json",
       async:true,
       type:'POST',
       success:function(data) {
         
         for(var i=0; i<data.length;i++) {
           //request_tweets(uids[i]);
           store_tweet(data[i]);
           total_tweets.push(data[i]);
         }
         
         
         
       },
       complete:function() {
          /* enabling clicking in other tags untill completion of this request */
         
       }
    });
};

jQuery(document).ready(function(){
  jQuery.ajax({
       url: "/requestCredentials",
       dataType: "json",
       async:true,
       type:'POST',
       success:function(data) {
         
         current_user_id = data['id_str'];
         console.log('friend');
         console.log(current_user_id);
         getFriendsList();
         
       },
       complete:function() {
          /* enabling clicking in other tags untill completion of this request */
         
       }
    });
  
});

var getFriendsList = function() {
  jQuery.ajax({
       url: "/getFriendsRequest",
       dataType: "json",
       async:true,
       type:'POST',
       success:function(data) {
         
         var uids = data['users'];
         for(var i=0; i<uids.length;i++) {
           //request_tweets(uids[i]);
           console.log('friends');
           console.log(current_user_id);
           var temp_user = {'screen_name': uids[i]['screen_name'], 'id': uids[i]['id_str'],'current_user':current_user_id};
           user_ids.push(temp_user);
           store_user(temp_user);
           request_tweets(temp_user['id']);
         }
         
       },
       complete:function() {
          /* enabling clicking in other tags untill completion of this request */
         
       }
    });
};


