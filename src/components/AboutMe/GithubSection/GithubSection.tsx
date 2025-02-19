import React, { useEffect, useState } from 'react';
import styles from './GithubSection.module.css';

interface GitHubProfileData {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GitHubSection: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://api.github.com/users/PollakDEV')
      .then((response) => response.json())
      .then((data: GitHubProfileData) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching GitHub profile:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.githubProfile}>
      <h2>GitHub Profile</h2>
      {loading ? (
        <p>Loading GitHub profile...</p>
      ) : profile ? (
        <div className={styles.profileContainer}>
          <img
            src={profile.avatar_url}
            alt={`${profile.login} avatar`}
            className={styles.avatar}
          />
          <div>
            <h3>{profile.name || profile.login}</h3>
            <p>{profile.bio}</p>
            <a href={profile.html_url} target="_blank" rel="noreferrer">
              View my GitHub
            </a>
            <ul className={styles.stats}>
              <li>Public Repos: {profile.public_repos}</li>
              <li>Followers: {profile.followers}</li>
              <li>Following: {profile.following}</li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Error loading GitHub profile.</p>
      )}
    </section>
  );
};

export default GitHubSection;
