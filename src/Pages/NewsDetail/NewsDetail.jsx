import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams();

    console.log('id', id);
    return (
        <div className="detail-container">
            <div className='news-detail'>
                <div className='news-detail-header'>
                    <div className="subheading">
                        <h5>মতামত</h5>
                    </div>
                    <div className="heading">
                        <h1>হুন্ডি বন্ধের পথ কী</h1>
                    </div>
                </div>

                <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-04%2Fdbd4d9b1-0be2-478a-b30e-5f8d0bbbefd2%2FRussia_Gas.jpg?rect=20%2C0%2C920%2C613&auto=format%2Ccompress&fmt=webp&format=webp&w=610&dpr=1.0" alt="" />

                <div className="description">
                    <p>দেশের টাকা বিদেশে পাচার হয়ে যাচ্ছে। বৈধ-অবৈধ আয় করে সেই টাকা বিদেশে পাচার করে ভোগের মাধ্যম হুন্ডি। বাংলাদেশের অনেক রাজনৈতিক নেতা, এমপি-মন্ত্রী, ব্যবসায়ী, উচ্চপদস্থ সরকারি-বেসরকারি কর্মকর্তা, আমলা-সচিব হুন্ডির সঙ্গে প্রত্যক্ষভাবে জড়িত। উচ্চশিক্ষায় বিদেশগামী শিক্ষার্থী, চিকিৎসায় বিদেশগামী, শপিং ও ভ্রমণে যাওয়া, এমনকি হজে যাওয়া যাত্রীরাও অনেক সময় হুন্ডির ওপর নির্ভর করেন। কিছু পক্ষ জেনে অর্থ পাচার করে, অন্যরা বাংলাদেশ ব্যাংক ও বাণিজ্যিক ব্যাংকের বাধায় পড়ে দরকারে হুন্ডি করে। প্রবাসীশ্রমিক ভাইবোনেরা, বিদেশে স্থায়ীভাবে বসবাসরত অনাবাসী বাংলাদেশিরা (এনআরবি), ফ্রিল্যান্সর ও ব্যবসায়ীরা ব্যাংকিং চ্যানেলে বৈধভাবে এবং হুন্ডির মাধ্যমে অবৈধভাবে দেশে টাকা নিয়ে আসেন।</p>

                    <p>
                        মোটাদাগে প্রবাসী ও চাকরিজীবীরা বৈদেশিক মুদ্রা দেশে আনেন, রাজনৈতিক নেতা, এমপি-মন্ত্রী ও আমলারা বৈদেশিক মুদ্রা পাচার করেন, আর ব্যবসায়ীরা দুটিই করেন।
                        হুন্ডি ছোট সমস্যা, বড় সমস্যা পাচার। ‘ডলার ড্রেইন’ বন্ধ করতে হলে পাচার থামাতে হবে। পাচারের একটা বড় অংশের সঙ্গে অবৈধ আয় করা, চাঁদাবাজি-তদবিরে কামাই করা রাজনৈতিক নেতা, ঘুষ খাওয়া প্রশাসনিক কর্মকর্তা-আমলারা জড়িত। পাশাপাশি রপ্তানি মূল্য কম দেখিয়ে ‘আন্ডার ইনভয়েসিং’ এবং আমদানি মূল্য বেশি দেখিয়ে ব্যবসায়ীদের বৈদেশিক মুদ্রা পাচার, মোট পাচারের একটা বড় অংশ। যেহেতু পাচার বহুলাংশে ‘ক্ষমতা ও প্রভাব’ প্রশ্নের সঙ্গে জড়িত, তাই পাচার ও হুন্ডি থামাতে রাজনৈতিক সদিচ্ছা জরুরি। হুন্ডি দেশে ও দেশের বাইরে মুদ্রা আনা-নেওয়ার দ্বিমুখী চক্র। এতে ডলারসহ বৈদেশিক মুদ্রা যেমন পাচার হয়, তেমনি আসেও। হুন্ডি ঠেকাতে গেলে আগে হুন্ডি কেন হয়, সেটা বোঝা জরুরি।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;