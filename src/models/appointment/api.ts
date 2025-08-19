import { rtkApi } from 'configs/api/apiQuery.ts';
import { TreatmentTemplatesEndpoints } from 'configs/api/apiTypes.ts';
import { handleNotification } from 'utils/notificationHelpers.ts';
import { errorHandler } from 'utils/errorHandler.ts';
import { setTreatmentTemplates } from 'models/appointment/slice.ts';

const apiTreatmentTemplate = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchTreatments: build.query<ApiResponse<TreatmentTemplatesResponse>, void>({
      query: () => ({
        url: TreatmentTemplatesEndpoints.TREATMENT_TEMPLATE,
        method: 'GET',
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setTreatmentTemplates(data.data));
        } catch (e) {
          handleNotification(errorHandler(e), 'error');
        }
      },
      providesTags: ['treatments'],
    }),
    createTreatment: build.mutation<void, TreatmentTemplatesForm>({
      query: body => ({
        url: TreatmentTemplatesEndpoints.TREATMENT_TEMPLATE,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['treatments']),
    }),
    editTreatment: build.mutation<void, TreatmentTemplates>({
      query: ({ id, ...body }) => ({
        url: TreatmentTemplatesEndpoints.TREATMENT_TEMPLATE_ID.replace('{id}', id),
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['treatments']),
    }),
    deleteTreatment: build.mutation<void, string>({
      query: id => ({
        url: TreatmentTemplatesEndpoints.TREATMENT_TEMPLATE_ID.replace('{id}', id),
        method: 'DELETE',
      }),
      invalidatesTags: (_, error) => (error ? [] : ['treatments']),
    }),
  }),
});
export const {
  useCreateTreatmentMutation,
  useFetchTreatmentsQuery,
  useEditTreatmentMutation,
  useDeleteTreatmentMutation,
} = apiTreatmentTemplate;
