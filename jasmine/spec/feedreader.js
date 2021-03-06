/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */

	describe('RSS Feeds', function() {

		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */


		it('are defined', function() {

			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
			//console.log(allFeeds);
		});



		it('Url is defined', function() {
			for (var i = 0; i < allFeeds.length; i++) {
				var feedUrl = allFeeds[i].url;

				expect(feedUrl).toBeDefined();
				expect(feedUrl.length).not.toBe(0);
				//console.log(feedUrl);
			}

  });


		it('Name is defined', function() {
        for (var i = 0; i < allFeeds.length; i++) {
				var feedName = allFeeds[i].name;

				expect(feedName).toBeDefined();
				expect(feedName.length).not.toBe(0);
				//console.log(feedName);
			}
		});
	});



	describe('The Menu', function() {


		it('Menu is hidden by default', function() {
			expect($("body").hasClass('menu-hidden')).toBe(true);

		});



		it('Changes visibility when menu is clicked', function() {
			var menuLink = $('.menu-icon-link');

			//The 1st click triggers the menu to open.
			menuLink.trigger('click');
			expect($("body").hasClass('menu-hidden')).toBe(false);

			//The 2nd click closes the menu.
			menuLink.trigger('click');
			expect($("body").hasClass('menu-hidden')).toBe(true);

		});

	});
	/* TODO: Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {

		beforeEach(function(done) {
			loadFeed(0, done);
		});

		/* TODO: Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */

		it('makes sure theres an entry', function() {

			var feedEnt = $('.feed .entry');
			expect(feedEnt.length).toBeGreaterThan(0);
			//console.log(feedEnt)
		});
	});

	/* TODO: Write a new test suite named "New Feed Selection" */

	describe('News Feed Selection', function() {
		var feedOne;
    var feedTwo;

		beforeAll(function(done) {
			loadFeed(1, function(){
        feedOne = $('.feed').html();
        loadFeed(0, done);
        console.log('this');
      });
		})


		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */

		it('changes feed articles', function(done) {
      feedTwo = $('.feed').html();
			expect(feedOne).not.toEqual(feedTwo);
      console.log('that')
      done();

		})

	});

}());
