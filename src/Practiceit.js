var state = {
    socialMediaDetails: {
      socialMediaDetail: [{
          link: "HARIRAM@twitter.com",
          name: "twitter"
        }, {
          link: "VarnaHERO@facebook.com",
          name: "facebook"
        }, {
          link: "linkedIn@linkedin.com",
          name: "linkedIn"
        }, {
          link: "another twitter link",
          name: "twitter"
        }
      ]
    }
  }
  
  /* 
  Find link of first item matching by name (or undefined if no match found) 
  */
  function Practiceit(name) {
    for (const item of state.socialMediaDetails.socialMediaDetail) {
      if (item.name === name) {
        return item.link;
      }
    }
  }
  
  /* 
  Find links for all items with matching name (or empty array if no
  matches found) 
  */
  function findLinksByName(name) {
    return state.socialMediaDetails.socialMediaDetail
      .filter(item => item.name === name)
      .map(item => item.link);
  }
  
  console.log(findLinksByName('twitter'));
  console.log(findLinksByName('facebook'));
  console.log(findLinksByName('twitter'));
  console.log(findLinksByName('facebook'));