import { NewsItem, NewsFormData } from '../types/news'

export const MOCK_NEWS: NewsItem[] = [
  {
    NewsId: 4,
    NameNews: 'แจ้งประชุมระบบ E-office วันที่ 12 ธันวาคม 2564',
    Detail: 'ประชุมวิดีโอคอนเฟอเรนซ์ผ่านระบบ Zoom วันที่ 12 ธันวาคม 2564 เวลา 09.00 น.',
    Status: 1, UpdatedDate: '2021-12-12T09:00:00',
    ButtonView: 1, ButtonEdit: 1, ButtonDelete: 1,
  },
  {
    NewsId: 5,
    NameNews: 'แจ้งเข้าร่วมประชุม วันที่ 14 ธันวาคม 2564',
    Detail: 'ขอเชิญบุคลากรเข้าร่วมประชุมสัมมนาวิชาการประจำปี 2564',
    Status: 1, UpdatedDate: '2021-12-14T10:00:00',
    ButtonView: 1, ButtonEdit: 1, ButtonDelete: 0,
  },
  {
    NewsId: 6,
    NameNews: 'แจ้งการอบรมการใช้งานระบบ E-office วันที่ 18 ธันวาคม 2564',
    Detail: 'การอบรมการใช้งานระบบ E-office สำหรับเจ้าหน้าที่ใหม่',
    Status: 0, UpdatedDate: '2021-12-18T13:00:00',
    ButtonView: 1, ButtonEdit: 0, ButtonDelete: 0,
  },
  {
    NewsId: 7,
    NameNews: 'แจ้งอัปเดตปรับปรุงระบบ E-office วันที่ 28 ธันวาคม 2564',
    Detail: 'ระบบ E-office จะทำการปิดปรับปรุงในวันที่ 28 ธันวาคม 2564',
    Status: 1, UpdatedDate: '2021-12-28T00:00:00',
    ButtonView: 1, ButtonEdit: 1, ButtonDelete: 1,
  },
]

export const EMPTY_FORM: NewsFormData = {
  NameNews: '', Detail: '', Status: 1,
  ButtonView: 1, ButtonEdit: 1, ButtonDelete: 1,
}