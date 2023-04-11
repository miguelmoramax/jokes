import { useState, useEffect } from 'react';
import axios from 'axios';
import { Joke, JokeResponse } from '../types';

const BASE_URL = 'https://retoolapi.dev/zu9TVE/jokes';

export const useJokes = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  // useEffect(() => {
  //   axios.get<JokeResponse>(`${BASE_URL}?_page=1&_limit=10`).then((res) => {
  //     setJokes(res.data.data);
  //     setTotalCount(res.data.totalCount);
  //   });
  // }, []);

  const fetchJokes = (page: number, limit: number) => {
    axios.get<JokeResponse>(`${BASE_URL}?_page=${page}&_limit=${limit}`).then((res) => {
      setJokes(res.data.data);
      setTotalCount(res.data.totalCount);
    });
  };

  return { jokes, totalCount, fetchJokes };
};

