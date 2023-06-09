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
import ThemeContextWrapper from './Theme/theme2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <ThemeContextWrapper>
       <Toaster></Toaster>
       <RouterProvider router={router} />
</ThemeContextWrapper>
     
       </AuthProvider>
  </React.StrictMode>,
)
