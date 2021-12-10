import React, { useEffect, useState } from 'react'
import axios from 'axios'

export enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

interface AxiosProps {
  url: string;
  method: RequestMethod;
  body: string;
  headers: string;
}

const useAxios = ({ url, method, body, headers }: AxiosProps) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res: { data: React.SetStateAction<null> }) => {
        setResponse(res.data)
      })
      .catch((err: React.SetStateAction<string>) => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [method, url, body, headers])

  return { response, error, loading }
}

export default useAxios
