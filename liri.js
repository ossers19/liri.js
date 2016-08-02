var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'EkvarYQGqBcCOuUa9JZD0VpkJ',
  consumer_secret: 'C2ocDSdM5CmOYW2Xa5W5OEq7vtridfaWWRztkNilA8of1gPajj',
  access_token_key: '368423363-7JBwoFdXrcaJesELsPqf86Yx9rJqTsajinKopb2Y',
  access_token_secret: 'Ctqivxgw4X5DJ5dJwuoMMrECSCs410ccJO4I7euQBEFVV'
});
 
var params = {screen_name: 'aye_djgabba'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweet.text);
  }

});

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
});

