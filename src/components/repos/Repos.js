import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);/*map loops through all the repos pulled out via const
  and for one looped thorugh we will call it repo. Then we want to display a repo item component.
  key is just the custom name(repo.id)*/
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
