var user_ids = [];
var total_tweets = [];
var compute_tweet = function() {
  jQuery.ajax({
       url: "requestComputeTweet",
       dataType: "json",
       async:true,
       type:'POST',
       success:function(data) {
         jQuery("#total_tweets").replaceWith("<div id='total_tweets'>Total tweets: " + data['no'] + " </div>");
         jQuery("#highest_domain").replaceWith("<div id='highest_domain'>Highest frequency domain: " + data['domain'] + " </div>");
         jQuery("#highest_user").replaceWith("<div id='highest_user'>User who has highest tweets: " + data['user'] + " </div>");
         
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
       data:{'uid':user['id'], 'screen_name': user['screen_name']},
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
       url: "/getFriendsRequest",
       dataType: "json",
       async:true,
       type:'POST',
       success:function(data) {
         
         var uids = data['users'];
         for(var i=0; i<uids.length;i++) {
           //request_tweets(uids[i]);
           var temp_user = {'screen_name': uids[i]['screen_name'], 'id': uids[i]['id_str']};
           user_ids.push(temp_user);
           store_user(temp_user);
           request_tweets(temp_user['id']);
         }
         
       },
       complete:function() {
          /* enabling clicking in other tags untill completion of this request */
         
       }
    });
  
});

