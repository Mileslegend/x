import type {OurFileRouter} from '@/app/api/uploadthing/core'
import { generateUploadDropzone } from "@uploadthing/react";
import { generateReactHelpers } from '@uploadthing/react/hooks'
import { generateUploadButton } from "@uploadthing/react";
 
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const {useUploadThing, uploadFiles} = generateReactHelpers<OurFileRouter>()
 






 