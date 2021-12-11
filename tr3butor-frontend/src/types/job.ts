export type JobParams = {
  title: string;
  description: string;
  salary_range: string;
  how_to_apply: string;
  link_apply: string;
  responsibilities: string;
  role_mission: string;
  hard_skills_requirements: string[];
  soft_skills_requirements: string[];
  culture_requirements: string[];
  experience_requirements: string[];
  education_requirements: string[];
  work_conditions: string[];
  benefits: string[];
  red_alerts: string[];
  additional_role_benefits: string[];
  location: string;
  timezone: string;
  payment: string;
  time_length: string;
  dao: {
    name: string;
    avatar: string;
    id: string;
    link_website: string;
    link_discord: string;
    description: string;
  };
  id: string;
};

export interface DaoJobsState {
  daoJobsData: JobParams[];
  daoJobsLoading: boolean;
  daoJobsError: null | string;
}

export interface JobsState {
  jobsData: JobParams[];
  jobsLoading: boolean;
  jobsError: null | string;
}

export interface JobState {
  jobData: JobParams | null;
  jobLoading: boolean;
  jobError: null | string;
}

export enum JobActionTypes {
  GET_DAO_JOBS = 'GET_DAO_JOBS',
  GET_DAO_JOBS_SUCCESS = 'GET_DAO_JOBS_SUCCESS',
  GET_DAO_JOBS_ERROR = 'GET_DAO_JOBS_ERROR',

  GET_JOBS = 'GET_DAO_JOBS',
  GET_JOBS_SUCCESS = 'GET_DAO_JOBS_SUCCESS',
  GET_JOBS_ERROR = 'GET_DAO_JOBS_ERROR',

  GET_JOB = 'GET_JOB',
  GET_JOB_SUCCESS = 'GET_JOB_SUCCESS',
  GET_JOB_ERROR = 'GET_JOB_ERROR',
}

interface GetDaoJobsAction {
  type: JobActionTypes.GET_DAO_JOBS;
}

interface GetDaoJobsSuccessAction {
  type: JobActionTypes.GET_DAO_JOBS_SUCCESS;
  payload: JobParams[];
}

interface GetDaoJobsErrorAction {
  type: JobActionTypes.GET_JOBS_ERROR;
  payload: string;
}

interface GetJobsAction {
  type: JobActionTypes.GET_JOBS;
}

interface GetJobsSuccessAction {
  type: JobActionTypes.GET_JOBS_SUCCESS;
  payload: JobParams[];
}

interface GetJobsErrorAction {
  type: JobActionTypes.GET_JOBS_ERROR;
  payload: string;
}

interface GetJobAction {
  type: JobActionTypes.GET_JOB;
}

interface GetJobSuccessAction {
  type: JobActionTypes.GET_JOB_SUCCESS;
  payload: JobParams;
}

interface GetJobErrorAction {
  type: JobActionTypes.GET_JOB_ERROR;
  payload: string;
}

export type jobAction =
  | GetDaoJobsAction
  | GetDaoJobsSuccessAction
  | GetDaoJobsErrorAction
  | GetJobsAction
  | GetJobsSuccessAction
  | GetJobsErrorAction
  | GetJobAction
  | GetJobSuccessAction
  | GetJobErrorAction;
