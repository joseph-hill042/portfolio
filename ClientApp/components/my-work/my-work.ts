import * as ko from 'knockout';
import * as $ from 'jquery';

class MyWorkViewModel {
   public scrollToTop = function() {
       $("html, body").animate({
           scrollTop: 0
       }, 600);
   };
}

export default { viewModel: MyWorkViewModel, template: require('./my-work.html') };
