import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import * as request from 'request';
import { University } from '../../models/university';


@Injectable()
export class UniversityScrapperService {

    universities_sa: University[];
    university_sa: University;

   getData() {
    request('http://africauniversities.org/south-africa/', (error, response, html) => {
        if(!error && response.statusCode == 200)
        {
           const $ = cheerio.load(html);

           const univesities = $('.et_pb_module').each((i, el) => {

            const name = $(el).find('.et_pb_toggle_title').text();
            const uni_bio = $(el).find('.et_pb_toggle_content').text();



            console.log("University: " + name + " " + uni_bio + "\n\n\n");
           });
           

        } else {
            console.log("there is a error");
        }
    });
   }
}
