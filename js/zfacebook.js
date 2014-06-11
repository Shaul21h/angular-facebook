angular.module('fbmod',[])
	.factory('zfacebook', [
	'$q',
	
	function($q){
			(function(d, s, id){ //loads fb 
					 var js, fjs = d.getElementsByTagName(s)[0];
					 if (d.getElementById(id)) {return;}
					 js = d.createElement(s); js.id = id;
					 js.src = "//connect.facebook.net/en_US/sdk.js";
					 fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
			
			//permissions
			var permissions = {
				useraboutme: "user_about_me",
				useractionsnews: "user_actions.news",
				userbirthday:"user_birthday",
				userfriends: "user_friends",
				userhometown: "user_hometown",
				userlocation: "user_location",
				userrelationships: "user_relationships",
				usertaggedplaces: "user_tagged_places",
				userworkhistory: "user_work_history",
				useractionsbooks: "user_actions.books",
				useractionsvideo: "user_actions.video",
				usereducationhistory: "user_education_history",
				usergamesactivity: "user_games_activity",
				userinterests: "user_interests",
				userphotos: "user_photos",
				userreligionpolitics: "user_religion_politics",
				uservideos: "user_videos",
				useractionsmusic: "user_actions.music",
				useractivities: "user_activities",
				userevents: "user_events",
				usergroups: "user_groups",
				userlikes: "user_likes",
				userrelationshipdetails: "user_relationship_details",
				userstatus: "user_status",
				userwebsite: "user_website"
			};
			
			//extended permissions
			var extendedpermissions = {
				email : "email",
				publishactions: "publish_actions",
				readmailbox: "read_mailbox",
				rsvpevent: "rsvp_event",
				managenotifications: "manage_notifications",
				readfriendlists: "read_friendlists",
				readpagemailboxes: "read_page_mailboxes",
				managepages: "manage_pages",
				readinsights: "read_insights",
				readstream: "read_stream"
			};
			
			var isFbReady = function(){
				var defer = $q.defer();
				var checkfb = setInterval(function(){
					if (angular.isDefined(FB)) {
						clearInterval(checkfb);
						defer.resolve(FB);
					}
				},100)
				return defer.promise;
			}
			var init = function(settings){
				var defer = $q.defer();
				isFbReady().then(function(fb){
					fb.init({
          appId      : settings.appid,
          xfbml      : true,
          version    : 'v2.0'
					});
					
					defer.resolve(fb);
				})
				return defer.promise;
			}
			return {
				init : init,
				permissions : permissions,
				extendedpermissions : extendedpermissions
			}
	}]);
