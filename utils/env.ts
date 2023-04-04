import dotenv from "dotenv"

export default class ENV{
  public static BASE_URL = process.env.BASE_URL
  public static USERNAME = process.env.USERNAME
  public static PASSWORD = process.env.PASSWORD
  // add to SChool Bag COURSE
  public static REVIEW_COURSE_CAMPUS = process.env.REVIEW_COURSE_CAMPUS
  public static REVIEW_COURSE_CATEGORY = process.env.REVIEW_COURSE_CATEGORY
  public static REVIEW_COURSE = process.env.REVIEW_COURSE
  public static REVIEW_DATE = process.env.REVIEW_DATE
  public static REVIEW_COURSE_DATE = process.env.REVIEW_COURSE_DATE
  public static REVIEW_COURSE_SEAT = process.env.REVIEW_COURSE_SEAT
  public static REVIEW_ANOTHER_DATE = process.env.REVIEW_ANOTHER_DATE
  // add to School Bag Short Courses
  public static REVIEW_SHORT_COURSE_CAMPUS = process.env.REVIEW_SHORT_COURSE_CAMPUS
  public static REVIEW_SHORT_COURSE_CATEGORY = process.env.REVIEW_SHORT_COURSE_CATEGORY
  public static REVIEW_SHORT_COURSE = process.env.REVIEW_SHORT_COURSE
  public static REVIEW_SHORT_COURSE_DATE = process.env.REVIEW_SHORT_COURSE_DATE
  public static REVIEW_SHORT_COURSE_SEAT = process.env.REVIEW_SHORT_COURSE_SEAT

  //Input and Review Application
  public static GIVEN_NAME = process.env.GIVEN_NAME
  public static EMERGENCY_CONTACT = process.env.EMERGENCY_CONTACT
  public static TUITION_AMOUNT = process.env.TUITION_AMOUNT
  public static REVIEW_TUITION_AMOUNT = process.env.REVIEW_TUITION_AMOUNT
  public static REVIEW_TUITION = process.env.REVIEW_TUITION
  //SHort Course
  public static TUITION_AMOUNT_SHORT_COURSE = process.env.TUITION_AMOUNT_SHORT_COURSE
  public static GIVEN_NAME_SC = process.env.GIVEN_NAME_SC
  public static EMERGENCY_CONTACT_SC = process.env.EMERGENCY_CONTACT_SC
  public static TUITION_AMOUNT_SC = process.env.TUITION_AMOUNT_SC
  public static REVIEW_TUITION_AMOUNT_SC = process.env.REVIEW_TUITION_AMOUNT_SC
  public static REVIEW_TUITION_SC = process.env.REVIEW_TUITION_SC

  //EMPORTAL WEBSITE
  public static BASE_URL_EMPORTAL = process.env.BASE_URL_EMPORTAL
  public static  EMPORTAL_USERNAME = process.env.EMPORTAL_USERNAME
  public static  EMPORTAL_PASSWORD = process.env.EMPORTAL_PASSWORD
  public static INDIVIDUAL = process.env.INDIVIDUAL
}