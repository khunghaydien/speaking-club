import * as yup from 'yup'

export const createSpeakingRoomValidation = yup.object({
    name: yup.string().nullable().required('Name is requied'),
    level: yup.object().nullable().required('Level is required'),
    maximumParticipant: yup.object().nullable().required('Maximum Participant is required'),
    language: yup.object().nullable().required('Language is required'),
})