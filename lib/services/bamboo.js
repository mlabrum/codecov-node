module.exports = {

  detect : function(){
    return !!process.env.bamboo_resultsUrl;
  },

  configuration : function(){
    console.log('    Bamboo CI Detected');
    return {
      service : 'bamboo',
      commit : process.env.bamboo_repository_revision_number,
      build : process.env.bamboo_buildNumber,
      job : process.env.bamboo_buildNumber,
      build_url: process.env.bamboo_buildResultsUrl,
      branch : process.env.bamboo_pull_ref || process.env.bamboo_repository_branch_name,
      pr: process.env.bamboo_pull_num,
      slug : (process.env.bamboo_repository_git_repositoryUrl || '').replace(/^.*(\/[a-z0-9]\/[a-z0-9])\.git$/i, '$1'),
      root : process.env.bamboo_build_working_directory
    };
  }

};
