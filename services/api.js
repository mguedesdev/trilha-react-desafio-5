import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nsceareiuxnvtwomjrxj.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zY2VhcmVpdXhudnR3b21qcnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NTAwMjAsImV4cCI6MjAwMzAyNjAyMH0.Wefn-49nvRP7MRd2zYGdTqGDfqJmSxJ9Gigq0BFw3zc",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zY2VhcmVpdXhudnR3b21qcnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NTAwMjAsImV4cCI6MjAwMzAyNjAyMH0.Wefn-49nvRP7MRd2zYGdTqGDfqJmSxJ9Gigq0BFw3zc"
    }
})