import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import DataProvider from './provider/DataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <DataProvider>
       <Toaster></Toaster>
       <RouterProvider router={router} />
       </DataProvider>
     
       </AuthProvider>
  </React.StrictMode>,
)
