"use client"

import CandidateDetailsLoading from '@/components/loader/CandidateDetailsLoading';
import { useGetSingleCandidateQuery } from '@/redux/features/candidate/candidateApi';
import { useParams } from 'next/navigation';
import ServerErrorCard from '@/components/card/ServerErrorCard';
import CandidateDetail from '@/components/CandidateDetail/CandidateDetail';
import NotFoundCard from '@/components/card/NotFoundCard';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { SetCandidateDetails } from '@/redux/features/candidate/candidateSlice';

const CandidateDetailsPage = ()=> {
  const params = useParams<{ id: string; }>()
  const { data, isLoading, isError } = useGetSingleCandidateQuery(params.id);
  const dispatch = useAppDispatch();

   useEffect(() => {
    if (data?.data?.userDetails) {
      dispatch(SetCandidateDetails(data?.data?.userDetails));
    }
  }, [data, dispatch]);

  if(isLoading){
    return <CandidateDetailsLoading/>
  }

  if(!isLoading && isError){
    return <ServerErrorCard/>
  }


  if(!isLoading && !isError && data?.data?.userDetails?.name){
    return <CandidateDetail />
  }
 
  if(!isLoading && !isError && !data?.data?.userDetails?.name){
    return <NotFoundCard title="Candidate Not Found"/>
  }

 
}

export default CandidateDetailsPage;