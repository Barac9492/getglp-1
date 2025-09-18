module.exports = {

"[project]/.next-internal/server/app/community/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clinics": (()=>clinics),
    "communityPosts": (()=>communityPosts),
    "items": (()=>items),
    "mockComments": (()=>mockComments),
    "reports": (()=>reports)
});
const items = [
    {
        id: 'wegovy',
        displayNameKo: '위고비',
        color: '#2E7D32'
    },
    {
        id: 'mounjaro',
        displayNameKo: '마운자로',
        color: '#1E88E5'
    }
];
const clinics = [
    {
        "id": "clinic-1",
        "name": "리더스내과의원",
        "address": "서울특별시 강남구 테헤란로 101",
        "location": {
            "latitude": 37.5008,
            "longitude": 127.0371
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm6",
        "district": "서울 강남구",
        "phone": "02-566-0101",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 350000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 2).toISOString(),
        "confidenceScore": 0.9
    },
    {
        "id": "clinic-2",
        "name": "연세새로운내과",
        "address": "서울특별시 서초구 서초중앙로 188",
        "location": {
            "latitude": 37.4939,
            "longitude": 127.0131
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm3",
        "district": "서울 서초구",
        "phone": "02-595-1175",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 410000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 5).toISOString(),
        "confidenceScore": 0.85
    },
    {
        "id": "clinic-3",
        "name": "분당서울대병원",
        "address": "경기도 성남시 분당구 구미로173번길 82",
        "location": {
            "latitude": 37.3592,
            "longitude": 127.1082
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj6",
        "district": "성남시 분당구",
        "phone": "1588-3369",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 360000,
            "mounjaro": 400000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 1).toISOString(),
        "confidenceScore": 0.95
    },
    {
        "id": "clinic-4",
        "name": "한림대학교동탄성심병원",
        "address": "경기도 화성시 큰재봉길 7",
        "location": {
            "latitude": 37.2023,
            "longitude": 127.0694
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydh8",
        "district": "동탄",
        "phone": "031-8086-2114",
        "status": {
            "wegovy": "unknown",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 420000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 8).toISOString(),
        "confidenceScore": 0.7
    },
    {
        "id": "clinic-5",
        "name": "서울아산병원",
        "address": "서울특별시 송파구 올림픽로43길 88",
        "location": {
            "latitude": 37.5265,
            "longitude": 127.1097
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm7",
        "district": "서울 송파구",
        "phone": "1688-7575",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 345000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 3).toISOString(),
        "confidenceScore": 0.8
    },
    {
        "id": "clinic-6",
        "name": "차의과학대학교 분당차병원",
        "address": "경기도 성남시 분당구 야탑로 59",
        "location": {
            "latitude": 37.4116,
            "longitude": 127.1278
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydjk",
        "district": "성남시 분당구",
        "phone": "1577-4488",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "unavailable"
        },
        "price": {},
        "lastUpdated": new Date(Date.now() - 86400000 * 12).toISOString(),
        "confidenceScore": 0.9
    },
    {
        "id": "clinic-7",
        "name": "세브란스병원",
        "address": "서울특별시 서대문구 연세로 50-1",
        "location": {
            "latitude": 37.5623,
            "longitude": 126.9407
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm2",
        "district": "서울 서대문구",
        "phone": "1599-1004",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 370000,
            "mounjaro": 405000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 1).toISOString(),
        "confidenceScore": 0.98
    },
    {
        "id": "clinic-8",
        "name": "서울대학교병원",
        "address": "서울특별시 종로구 대학로 101",
        "location": {
            "latitude": 37.5794,
            "longitude": 126.9994
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm9",
        "district": "서울 종로구",
        "phone": "1588-5700",
        "status": {
            "wegovy": "available",
            "mounjaro": "unknown"
        },
        "price": {
            "wegovy": 355000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 4).toISOString(),
        "confidenceScore": 0.75
    },
    {
        "id": "clinic-9",
        "name": "고려대학교구로병원",
        "address": "서울특별시 구로구 구로동로 148",
        "location": {
            "latitude": 37.4921,
            "longitude": 126.8851
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk4",
        "district": "서울 구로구",
        "phone": "1577-9966",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 415000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 6).toISOString(),
        "confidenceScore": 0.82
    },
    {
        "id": "clinic-10",
        "name": "동탄연세내과의원",
        "address": "경기도 화성시 동탄반석로 172",
        "location": {
            "latitude": 37.208,
            "longitude": 127.075
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydh9",
        "district": "동탄",
        "phone": "031-8015-5119",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 365000,
            "mounjaro": 395000
        },
        "lastUpdated": new Date().toISOString(),
        "confidenceScore": 1
    },
    {
        "id": "clinic-11",
        "name": "강동경희대학교병원",
        "address": "서울특별시 강동구 동남로 892",
        "location": {
            "latitude": 37.5532,
            "longitude": 127.1568
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydrq",
        "district": "서울 강동구",
        "phone": "1577-5800",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 340000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 7).toISOString(),
        "confidenceScore": 0.78
    },
    {
        "id": "clinic-12",
        "name": "분당제생병원",
        "address": "경기도 성남시 분당구 서현로180번길 20",
        "location": {
            "latitude": 37.3868,
            "longitude": 127.1275
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj6",
        "district": "성남시 분당구",
        "phone": "031-779-5000",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 405000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 3).toISOString(),
        "confidenceScore": 0.88
    },
    {
        "id": "clinic-13",
        "name": "순천향대학교 서울병원",
        "address": "서울특별시 용산구 대사관로 59",
        "location": {
            "latitude": 37.5381,
            "longitude": 127.0041
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm6",
        "district": "서울 용산구",
        "phone": "02-709-9114",
        "status": {
            "wegovy": "unknown",
            "mounjaro": "unknown"
        },
        "price": {},
        "lastUpdated": new Date(Date.now() - 86400000 * 20).toISOString(),
        "confidenceScore": 0.5
    },
    {
        "id": "clinic-14",
        "name": "고려대학교안암병원",
        "address": "서울특별시 성북구 고려대로 73",
        "location": {
            "latitude": 37.587,
            "longitude": 127.026
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydmc",
        "district": "서울 성북구",
        "phone": "1577-0083",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 375000,
            "mounjaro": 415000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 1).toISOString(),
        "confidenceScore": 0.92
    },
    {
        "id": "clinic-15",
        "name": "속편한내과의원 동탄점",
        "address": "경기도 화성시 동탄중심상가2길 7",
        "location": {
            "latitude": 37.2045,
            "longitude": 127.0722
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydh8",
        "district": "동탄",
        "phone": "031-8015-3113",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 425000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 4).toISOString(),
        "confidenceScore": 0.8
    },
    {
        "id": "clinic-16",
        "name": "에이치플러스 양지병원",
        "address": "서울특별시 관악구 남부순환로 1636",
        "location": {
            "latitude": 37.484,
            "longitude": 126.9252
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk5",
        "district": "서울 관악구",
        "phone": "1877-8875",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 330000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 9).toISOString(),
        "confidenceScore": 0.7
    },
    {
        "id": "clinic-17",
        "name": "나우리가정의학과",
        "address": "경기도 성남시 분당구 돌마로 75",
        "location": {
            "latitude": 37.3503,
            "longitude": 127.1086
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj3",
        "district": "성남시 분당구",
        "phone": "031-711-7588",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 355000,
            "mounjaro": 390000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 2).toISOString(),
        "confidenceScore": 0.91
    },
    {
        "id": "clinic-18",
        "name": "이화여자대학교 목동병원",
        "address": "서울특별시 양천구 안양천로 1071",
        "location": {
            "latitude": 37.5367,
            "longitude": 126.8864
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk7",
        "district": "서울 양천구",
        "phone": "1666-5000",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 430000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 5).toISOString(),
        "confidenceScore": 0.83
    },
    {
        "id": "clinic-19",
        "name": "원자력병원",
        "address": "서울특별시 노원구 노원로 75",
        "location": {
            "latitude": 37.6433,
            "longitude": 127.0805
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydrs",
        "district": "서울 노원구",
        "phone": "02-970-2114",
        "status": {
            "wegovy": "available",
            "mounjaro": "unknown"
        },
        "price": {
            "wegovy": 380000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 15).toISOString(),
        "confidenceScore": 0.65
    },
    {
        "id": "clinic-20",
        "name": "연세의원",
        "address": "경기도 성남시 분당구 황새울로360번길 21",
        "location": {
            "latitude": 37.385,
            "longitude": 127.123
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj6",
        "district": "성남시 분당구",
        "phone": "031-701-3579",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 360000,
            "mounjaro": 400000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 3).toISOString(),
        "confidenceScore": 0.89
    },
    {
        "id": "clinic-21",
        "name": "건국대학교병원",
        "address": "서울특별시 광진구 능동로 120-1",
        "location": {
            "latitude": 37.5404,
            "longitude": 127.0792
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydmf",
        "district": "서울 광진구",
        "phone": "1588-1533",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 410000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 6).toISOString(),
        "confidenceScore": 0.8
    },
    {
        "id": "clinic-22",
        "name": "서울바른내과의원",
        "address": "경기도 화성시 동탄공원로2길 33-12",
        "location": {
            "latitude": 37.215,
            "longitude": 127.072
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydh9",
        "district": "동탄",
        "phone": "031-375-8275",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 370000,
            "mounjaro": 400000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 1).toISOString(),
        "confidenceScore": 0.95
    },
    {
        "id": "clinic-23",
        "name": "삼성서울병원",
        "address": "서울특별시 강남구 일원로 81",
        "location": {
            "latitude": 37.4883,
            "longitude": 127.0855
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm6",
        "district": "서울 강남구",
        "phone": "1599-3114",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 345000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 4).toISOString(),
        "confidenceScore": 0.82
    },
    {
        "id": "clinic-24",
        "name": "보바스기념병원",
        "address": "경기도 성남시 분당구 대왕판교로 342",
        "location": {
            "latitude": 37.3734,
            "longitude": 127.1009
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj6",
        "district": "성남시 분당구",
        "phone": "1588-7575",
        "status": {
            "wegovy": "unknown",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 395000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 10).toISOString(),
        "confidenceScore": 0.72
    },
    {
        "id": "clinic-25",
        "name": "가톨릭대학교 은평성모병원",
        "address": "서울특별시 은평구 통일로 1021",
        "location": {
            "latitude": 37.6335,
            "longitude": 126.9175
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm8",
        "district": "서울 은평구",
        "phone": "1811-7575",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "unavailable"
        },
        "price": {},
        "lastUpdated": new Date(Date.now() - 86400000 * 18).toISOString(),
        "confidenceScore": 0.88
    },
    {
        "id": "clinic-26",
        "name": "상계백병원",
        "address": "서울특별시 노원구 동일로 1342",
        "location": {
            "latitude": 37.6483,
            "longitude": 127.0728
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydrs",
        "district": "서울 노원구",
        "phone": "02-950-1114",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 385000,
            "mounjaro": 425000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 3).toISOString(),
        "confidenceScore": 0.85
    },
    {
        "id": "clinic-27",
        "name": "강남세브란스병원",
        "address": "서울특별시 강남구 언주로 211",
        "location": {
            "latitude": 37.4932,
            "longitude": 127.0483
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm6",
        "district": "서울 강남구",
        "phone": "1599-6114",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 360000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 5).toISOString(),
        "confidenceScore": 0.79
    },
    {
        "id": "clinic-28",
        "name": "서울탑내과의원",
        "address": "경기도 성남시 분당구 야탑로 81번길 10",
        "location": {
            "latitude": 37.411,
            "longitude": 127.129
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydjk",
        "district": "성남시 분당구",
        "phone": "031-701-8888",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 410000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 2).toISOString(),
        "confidenceScore": 0.9
    },
    {
        "id": "clinic-29",
        "name": "국립중앙의료원",
        "address": "서울특별시 중구 을지로 245",
        "location": {
            "latitude": 37.5681,
            "longitude": 127.0051
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm9",
        "district": "서울 중구",
        "phone": "02-2260-7114",
        "status": {
            "wegovy": "available",
            "mounjaro": "unknown"
        },
        "price": {
            "wegovy": 350000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 7).toISOString(),
        "confidenceScore": 0.76
    },
    {
        "id": "clinic-30",
        "name": "경희대학교병원",
        "address": "서울특별시 동대문구 경희대로 23",
        "location": {
            "latitude": 37.5941,
            "longitude": 127.0504
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydmf",
        "district": "서울 동대문구",
        "phone": "02-958-8114",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 365000,
            "mounjaro": 405000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 1).toISOString(),
        "confidenceScore": 0.94
    },
    {
        "id": "clinic-31",
        "name": "365mc병원",
        "address": "서울특별시 서초구 서초중앙로 42",
        "location": {
            "latitude": 37.4851,
            "longitude": 127.0133
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm3",
        "district": "서울 서초구",
        "phone": "1577-3653",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 400000,
            "mounjaro": 450000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 14).toISOString(),
        "confidenceScore": 0.68
    },
    {
        "id": "clinic-32",
        "name": "서울나우병원",
        "address": "경기도 성남시 분당구 성남대로 34",
        "location": {
            "latitude": 37.338,
            "longitude": 127.108
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj1",
        "district": "성남시 분당구",
        "phone": "031-715-1234",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 400000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 3).toISOString(),
        "confidenceScore": 0.87
    },
    {
        "id": "clinic-33",
        "name": "동탄시티병원",
        "address": "경기도 화성시 동탄솔빛로 56",
        "location": {
            "latitude": 37.223,
            "longitude": 127.068
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydh9",
        "district": "동탄",
        "phone": "031-373-1111",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 375000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 8).toISOString(),
        "confidenceScore": 0.74
    },
    {
        "id": "clinic-34",
        "name": "삼성의료원",
        "address": "서울특별시 강남구 일원로 81",
        "location": {
            "latitude": 37.4883,
            "longitude": 127.0855
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm7",
        "district": "서울 강남구",
        "phone": "1599-3114",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 355000,
            "mounjaro": 410000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 2).toISOString(),
        "confidenceScore": 0.93
    },
    {
        "id": "clinic-35",
        "name": "중앙대학교병원",
        "address": "서울특별시 동작구 흑석로 102",
        "location": {
            "latitude": 37.505,
            "longitude": 126.9585
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk5",
        "district": "서울 동작구",
        "phone": "1800-1114",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 420000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 5).toISOString(),
        "confidenceScore": 0.81
    },
    {
        "id": "clinic-36",
        "name": "한양대학교병원",
        "address": "서울특별시 성동구 왕십리로 222-1",
        "location": {
            "latitude": 37.5599,
            "longitude": 127.0423
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydmf",
        "district": "서울 성동구",
        "phone": "02-2290-8114",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 360000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 11).toISOString(),
        "confidenceScore": 0.71
    },
    {
        "id": "clinic-37",
        "name": "메디피아",
        "address": "경기도 성남시 분당구 이매로 111",
        "location": {
            "latitude": 37.397,
            "longitude": 127.133
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydjj",
        "district": "성남시 분당구",
        "phone": "031-705-1111",
        "status": {
            "wegovy": "unknown",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 398000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 4).toISOString(),
        "confidenceScore": 0.84
    },
    {
        "id": "clinic-38",
        "name": "목동힘찬병원",
        "address": "서울특별시 양천구 신정로 287",
        "location": {
            "latitude": 37.5198,
            "longitude": 126.8553
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk7",
        "district": "서울 양천구",
        "phone": "1577-9229",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 370000,
            "mounjaro": 410000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 1).toISOString(),
        "confidenceScore": 0.96
    },
    {
        "id": "clinic-39",
        "name": "강남차병원",
        "address": "서울특별시 강남구 논현로 566",
        "location": {
            "latitude": 37.5072,
            "longitude": 127.0345
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm6",
        "district": "서울 강남구",
        "phone": "1577-4488",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "unavailable"
        },
        "price": {},
        "lastUpdated": new Date(Date.now() - 86400000 * 25).toISOString(),
        "confidenceScore": 0.8
    },
    {
        "id": "clinic-40",
        "name": "동탄성모병원",
        "address": "경기도 화성시 노작로 225",
        "location": {
            "latitude": 37.211,
            "longitude": 127.0626
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydh8",
        "district": "동탄",
        "phone": "1522-2691",
        "status": {
            "wegovy": "available",
            "mounjaro": "unknown"
        },
        "price": {
            "wegovy": 380000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 6).toISOString(),
        "confidenceScore": 0.77
    },
    {
        "id": "clinic-41",
        "name": "강북삼성병원",
        "address": "서울특별시 종로구 새문안로 9",
        "location": {
            "latitude": 37.5694,
            "longitude": 126.9682
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm9",
        "district": "서울 종로구",
        "phone": "1599-8114",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 360000,
            "mounjaro": 400000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 2).toISOString(),
        "confidenceScore": 0.92
    },
    {
        "id": "clinic-42",
        "name": "가톨릭대학교 서울성모병원",
        "address": "서울특별시 서초구 반포대로 222",
        "location": {
            "latitude": 37.5015,
            "longitude": 127.0051
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydm6",
        "district": "서울 서초구",
        "phone": "1588-1511",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "unavailable"
        },
        "price": {},
        "lastUpdated": new Date(Date.now() - 86400000 * 30).toISOString(),
        "confidenceScore": 0.75
    },
    {
        "id": "clinic-43",
        "name": "베스트내과의원",
        "address": "경기도 성남시 분당구 서현로 192",
        "location": {
            "latitude": 37.387,
            "longitude": 127.127
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj6",
        "district": "성남시 분당구",
        "phone": "031-779-5000",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 390000,
            "mounjaro": 430000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 9).toISOString(),
        "confidenceScore": 0.73
    },
    {
        "id": "clinic-44",
        "name": "아주대학교병원",
        "address": "경기도 수원시 영통구 월드컵로 164",
        "location": {
            "latitude": 37.2804,
            "longitude": 127.045
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj2",
        "district": "동탄",
        "phone": "1688-6114",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 415000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 4).toISOString(),
        "confidenceScore": 0.83
    },
    {
        "id": "clinic-45",
        "name": "서울척병원",
        "address": "서울특별시 성북구 동소문로 80",
        "location": {
            "latitude": 37.585,
            "longitude": 127.019
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydmc",
        "district": "서울 성북구",
        "phone": "1599-0033",
        "status": {
            "wegovy": "available",
            "mounjaro": "unavailable"
        },
        "price": {
            "wegovy": 370000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 6).toISOString(),
        "confidenceScore": 0.78
    },
    {
        "id": "clinic-46",
        "name": "중앙보훈병원",
        "address": "서울특별시 강동구 진황도로61길 53",
        "location": {
            "latitude": 37.5583,
            "longitude": 127.1423
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydrq",
        "district": "서울 강동구",
        "phone": "02-2225-1111",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 360000,
            "mounjaro": 400000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 1).toISOString(),
        "confidenceScore": 0.97
    },
    {
        "id": "clinic-47",
        "name": "보라매병원",
        "address": "서울특별시 동작구 보라매로5길 20",
        "location": {
            "latitude": 37.4947,
            "longitude": 126.9248
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk5",
        "district": "서울 동작구",
        "phone": "1577-0075",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 410000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 3).toISOString(),
        "confidenceScore": 0.86
    },
    {
        "id": "clinic-48",
        "name": "연세봄빛피부과",
        "address": "서울특별시 서초구 서초대로 396",
        "location": {
            "latitude": 37.4998,
            "longitude": 127.026
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk7",
        "district": "서울 서초구",
        "phone": "02-581-2222",
        "status": {
            "wegovy": "available",
            "mounjaro": "unknown"
        },
        "price": {
            "wegovy": 350000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 13).toISOString(),
        "confidenceScore": 0.69
    },
    {
        "id": "clinic-49",
        "name": "판교연세내과의원",
        "address": "경기도 성남시 분당구 판교역로 192",
        "location": {
            "latitude": 37.395,
            "longitude": 127.111
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydj7",
        "district": "성남시 분당구",
        "phone": "031-628-1000",
        "status": {
            "wegovy": "available",
            "mounjaro": "available"
        },
        "price": {
            "wegovy": 380000,
            "mounjaro": 420000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 5).toISOString(),
        "confidenceScore": 0.84
    },
    {
        "id": "clinic-50",
        "name": "여의도성모병원",
        "address": "서울특별시 영등포구 63로 10",
        "location": {
            "latitude": 37.518,
            "longitude": 126.9365
        },
        "mapPosition": {
            "top": "0",
            "left": "0"
        },
        "geohash": "wydk6",
        "district": "서울 영등포구",
        "phone": "1661-7575",
        "status": {
            "wegovy": "unavailable",
            "mounjaro": "available"
        },
        "price": {
            "mounjaro": 440000
        },
        "lastUpdated": new Date(Date.now() - 86400000 * 2).toISOString(),
        "confidenceScore": 0.9
    }
];
const reports = [
    {
        id: 'report-1',
        clinicId: 'clinic-1',
        clinicName: '리더스내과의원',
        item: 'wegovy',
        availability: 'available',
        priceKRW: 350000,
        reportedBy: 'user-abc',
        reportedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        _date: new Date(Date.now() - 86400000 * 2),
        sourceType: 'phone',
        verification: 'community-verified',
        votes: 8,
        note: '2주치 재고 확인했습니다.'
    },
    {
        id: 'report-2',
        clinicId: 'clinic-3',
        clinicName: '분당서울대병원',
        item: 'mounjaro',
        availability: 'available',
        priceKRW: 400000,
        reportedBy: 'user-def',
        reportedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
        _date: new Date(Date.now() - 86400000 * 1),
        sourceType: 'visit',
        verification: 'admin-verified',
        votes: 15,
        note: '오늘 방문해서 처방받았어요. 위고비도 있다고 합니다.'
    },
    {
        id: 'report-3',
        clinicId: 'clinic-4',
        clinicName: '한림대학교동탄성심병원',
        item: 'mounjaro',
        availability: 'available',
        priceKRW: 420000,
        reportedBy: 'user-ghi',
        reportedAt: new Date().toISOString(),
        _date: new Date(),
        sourceType: 'kakao',
        verification: 'unverified',
        votes: 2,
        note: '카톡으로 문의했고, 재고 소량 있다고 답변 받았습니다.'
    },
    {
        id: 'report-4',
        clinicId: 'clinic-6',
        clinicName: '차의과학대학교 분당차병원',
        item: 'wegovy',
        availability: 'unavailable',
        reportedBy: 'user-jkl',
        reportedAt: new Date(Date.now() - 86400000 * 12).toISOString(),
        _date: new Date(Date.now() - 86400000 * 12),
        sourceType: 'phone',
        verification: 'community-verified',
        votes: 6,
        note: '전화해봤는데 두 약 모두 현재 품절이고, 재입고 예정 없다고 합니다.'
    }
];
const communityPosts = [
    {
        id: 'post-1',
        title: '위고비/마운자로 주사 맞을 때 식단 조절 팁 있나요?',
        author: '헬린이',
        createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
        _date: new Date(Date.now() - 86400000 * 1),
        votes: 28,
        commentsCount: 12,
        category: '식단/운동',
        content: '주사 시작한 지 2주차인데, 식욕이 많이 줄긴 했지만 어떤 음식을 먹는 게 좋을지 고민입니다. 다들 어떻게 하고 계신가요? 단백질 위주로 먹으라는 얘기는 들었는데, 구체적인 식단 예시나 운동 병행 팁이 궁금합니다.'
    },
    {
        id: 'post-2',
        title: '주사 후 메스꺼움, 어떻게 대처하시나요?',
        author: '하늘바라기',
        createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
        _date: new Date(Date.now() - 86400000 * 3),
        votes: 45,
        commentsCount: 20,
        category: '부작용 관리',
        content: '저용량으로 시작했는데도 계속 속이 울렁거려서 힘드네요. 시간이 지나면 괜찮아진다고는 하는데, 그 전까지 좀 편해질 수 있는 방법이 있을까요? 생강차나 다른 민간요법 시도해보신 분 계시면 후기 부탁드립니다.'
    },
    {
        id: 'post-3',
        title: '운동 병행 질문! 유산소 vs. 근력 어떤 게 더 효과적인가요?',
        author: '운동조아',
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        _date: new Date(Date.now() - 86400000 * 5),
        votes: 15,
        commentsCount: 7,
        category: '식단/운동',
        content: '체중 감량 속도를 높이고 싶은데, 주사랑 같이 할 운동으로 어떤 게 좋을지 고민입니다. 유산소로 지방을 태우는 게 우선일지, 아니면 근력 운동으로 기초대사량을 높이는 게 장기적으로 이득일지... 경험자분들의 조언을 구합니다.'
    },
    {
        id: 'post-4',
        title: '다들 주사는 어느 시간대에 맞으시나요?',
        author: '분당주민',
        createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
        _date: new Date(Date.now() - 86400000 * 7),
        votes: 33,
        commentsCount: 15,
        category: '정보공유',
        content: '아침에 맞는 게 좋다는 사람도 있고, 저녁에 맞는 게 부작용 관리에 좋다는 사람도 있어서 헷갈리네요. 요일은 보통 주말로 잡으시나요? 다들 본인만의 루틴이 있으시면 공유해주세요!'
    }
];
const mockComments = [
    // Comments for post-1 (12 comments)
    {
        id: 'comment-1-1',
        postId: 'post-1',
        authorName: '프로틴러버',
        content: '단백질 쉐이크나 닭가슴살 추천합니다. 포만감이 오래가요.',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 1)
    },
    {
        id: 'comment-1-2',
        postId: 'post-1',
        authorName: '산책왕',
        content: '저는 삶은 계란을 간식으로 먹으니 좋더라고요.',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 2)
    },
    {
        id: 'comment-1-3',
        postId: 'post-1',
        authorName: '날씬해질래',
        content: '식단도 중요하지만, 가벼운 걷기라도 꼭 병행해주세요!',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 3)
    },
    {
        id: 'comment-1-4',
        postId: 'post-1',
        authorName: '헬린이',
        content: '오, 다들 감사합니다! 참고해서 식단 짜봐야겠어요.',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 4)
    },
    {
        id: 'comment-1-5',
        postId: 'post-1',
        authorName: '요리금손',
        content: '두부면 파스타도 칼로리 낮고 맛있어요.',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 5)
    },
    {
        id: 'comment-1-6',
        postId: 'post-1',
        authorName: '뉴비',
        content: '저도 식단 정보 찾고 있었는데 덕분에 알아갑니다!',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 6)
    },
    {
        id: 'comment-1-7',
        postId: 'post-1',
        authorName: '유지어터',
        content: '나중을 생각해서라도 근력 운동을 조금씩 해두시는 걸 추천!',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 7)
    },
    {
        id: 'comment-1-8',
        postId: 'post-1',
        authorName: '급식왕',
        content: '급식이라 식단 조절이 어려운데 어떡하죠? ㅠㅠ',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 8)
    },
    {
        id: 'comment-1-9',
        postId: 'post-1',
        authorName: '먹방요정',
        content: '저는 그냥 먹고 싶은 거 양을 줄여서 먹어요. 스트레스 받는 게 더 안 좋대서...',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 9)
    },
    {
        id: 'comment-1-10',
        postId: 'post-1',
        authorName: '친절한의사',
        content: '의료 전문가와 상담하여 본인에게 맞는 식단을 구성하는 것이 가장 좋습니다.',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 10)
    },
    {
        id: 'comment-1-11',
        postId: 'post-1',
        authorName: '궁금맨',
        content: '혹시 피해야 할 음식이 따로 있을까요? 기름진 거 빼고요.',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 11)
    },
    {
        id: 'comment-1-12',
        postId: 'post-1',
        authorName: '답변요정',
        content: '저는 탄산음료부터 끊으니까 속도 편해지고 살도 더 잘 빠지는 기분이에요.',
        createdAt: new Date(Date.now() - 86400000 * 1 + 3600000 * 12)
    },
    // Comments for post-2 (20 comments)
    {
        id: 'comment-2-1',
        postId: 'post-2',
        authorName: '선배님',
        content: '저는 그래서 자기 전에 맞아요. 자는 동안 지나가라고..',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 1)
    },
    {
        id: 'comment-2-2',
        postId: 'post-2',
        authorName: '동지섣달',
        content: '와 저만 그런 게 아니었군요 ㅠㅠ',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 2)
    },
    {
        id: 'comment-2-3',
        postId: 'post-2',
        authorName: '슬기로운약사생활',
        content: '매실액기스가 도움이 될 수 있습니다. 그래도 심하면 의사와 상담하세요.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 3)
    },
    {
        id: 'comment-2-4',
        postId: 'post-2',
        authorName: '하늘바라기',
        content: '매실액기스 한번 먹어봐야겠네요. 감사합니다!',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 4)
    },
    {
        id: 'comment-2-5',
        postId: 'post-2',
        authorName: '워터보이',
        content: '차가운 물을 조금씩 마시는 것도 도움이 돼요.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 5)
    },
    {
        id: 'comment-2-6',
        postId: 'post-2',
        authorName: '희망회로',
        content: '전 2주차부터 괜찮아졌어요. 조금만 힘내세요!',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 6)
    },
    {
        id: 'comment-2-7',
        postId: 'post-2',
        authorName: '기름좔좔',
        content: '기름진 음식은 피하는 게 좋더라고요.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 7)
    },
    {
        id: 'comment-2-8',
        postId: 'post-2',
        authorName: '불안맨',
        content: '병원에 연락해서 상담받아보시는게 어떨까요?',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 8)
    },
    {
        id: 'comment-2-9',
        postId: 'post-2',
        authorName: '껌이라면',
        content: '저는 껌 씹으니까 좀 낫더라고요.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 9)
    },
    {
        id: 'comment-2-10',
        postId: 'post-2',
        authorName: '진저에일',
        content: '생강차가 진짜 효과 있었어요!',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 10)
    },
    {
        id: 'comment-2-11',
        postId: 'post-2',
        authorName: '시간이약',
        content: '시간이 약입니다 ㅠㅠ',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 11)
    },
    {
        id: 'comment-2-12',
        postId: 'post-2',
        authorName: '죽쒔다',
        content: '소화 잘되는 죽 같은 거 드셔보세요.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 12)
    },
    {
        id: 'comment-2-13',
        postId: 'post-2',
        authorName: '파이팅',
        content: '힘내세요! 다들 겪는 과정이래요.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 13)
    },
    {
        id: 'comment-2-14',
        postId: 'post-2',
        authorName: '레벨업',
        content: '용량 올릴 때마다 다시 나타나기도 해요. ㅠㅠ',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 14)
    },
    {
        id: 'comment-2-15',
        postId: 'post-2',
        authorName: '위로요정',
        content: '다들 비슷한 경험을 하는군요... 위안이 됩니다.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 15)
    },
    {
        id: 'comment-2-16',
        postId: 'post-2',
        authorName: '눕눕',
        content: '저는 그냥 누워만 있었어요..',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 16)
    },
    {
        id: 'comment-2-17',
        postId: 'post-2',
        authorName: '탄산톡톡',
        content: '탄산수 마시면 좀 괜찮던데요?',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 17)
    },
    {
        id: 'comment-2-18',
        postId: 'post-2',
        authorName: '닥터스트레인지',
        content: '정 힘들면 의사쌤한테 약 처방해달라고 하세요.',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 18)
    },
    {
        id: 'comment-2-19',
        postId: 'post-2',
        authorName: '아자아자',
        content: '다들 화이팅입니다!',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 19)
    },
    {
        id: 'comment-2-20',
        postId: 'post-2',
        authorName: '하늘바라기',
        content: '조언들 감사합니다! 하나씩 시도해볼게요!',
        createdAt: new Date(Date.now() - 86400000 * 3 + 3600000 * 20)
    },
    // Comments for post-3 (7 comments)
    {
        id: 'comment-3-1',
        postId: 'post-3',
        authorName: '열정트레이너',
        content: '둘 다 중요하지만, 초반에는 근력 운동으로 대사량을 올려두는 게 장기적으로 유리합니다.',
        createdAt: new Date(Date.now() - 86400000 * 5 + 3600000 * 1)
    },
    {
        id: 'comment-3-2',
        postId: 'post-3',
        authorName: '달려라하니',
        content: '저는 그냥 매일 5km씩 뛰는데 살 잘 빠져요!',
        createdAt: new Date(Date.now() - 86400000 * 5 + 3600000 * 2)
    },
    {
        id: 'comment-3-3',
        postId: 'post-3',
        authorName: '운동조아',
        content: '아 근력이군요! 감사합니다. PT를 끊어야 하나...',
        createdAt: new Date(Date.now() - 86400000 * 5 + 3600000 * 3)
    },
    {
        id: 'comment-3-4',
        postId: 'post-3',
        authorName: '홈트요정',
        content: '유튜브에 홈트 영상 좋은 거 많아요!',
        createdAt: new Date(Date.now() - 86400000 * 5 + 3600000 * 4)
    },
    {
        id: 'comment-3-5',
        postId: 'post-3',
        authorName: '슬기로운의사',
        content: '무릎에 무리가 가지 않는 선에서 꾸준히 하는 게 제일 중요합니다.',
        createdAt: new Date(Date.now() - 86400000 * 5 + 3600000 * 5)
    },
    {
        id: 'comment-3-6',
        postId: 'post-3',
        authorName: '필라테스퀸',
        content: '저는 필라테스 하는데 라인 잡는 데 좋은 것 같아요.',
        createdAt: new Date(Date.now() - 86400000 * 5 + 3600000 * 6)
    },
    {
        id: 'comment-3-7',
        postId: 'post-3',
        authorName: '물개',
        content: '수영이 관절에 무리 안 가고 최고입니다.',
        createdAt: new Date(Date.now() - 86400000 * 5 + 3600000 * 7)
    },
    // Comments for post-4 (15 comments)
    {
        id: 'comment-4-1',
        postId: 'post-4',
        authorName: '밤도깨비',
        content: '금요일 저녁에 맞고 주말 동안 적응하는 편입니다.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 1)
    },
    {
        id: 'comment-4-2',
        postId: 'post-4',
        authorName: '얼리버드',
        content: '저는 월요일 아침에 맞고 한 주를 시작해요!',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 2)
    },
    {
        id: 'comment-4-3',
        postId: 'post-4',
        authorName: '분당주민',
        content: '부작용 때문에 고민이었는데, 저녁에 맞는 게 좋겠네요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 3)
    },
    {
        id: 'comment-4-4',
        postId: 'post-4',
        authorName: '꼼꼼이',
        content: '요일이랑 시간대별로 컨디션 기록해보고 본인한테 맞는 시간 찾는 걸 추천해요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 4)
    },
    {
        id: 'comment-4-5',
        postId: 'post-4',
        authorName: '프리스타일',
        content: '저는 그냥 생각날 때 맞아요. 크게 상관 없는듯?',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 5)
    },
    {
        id: 'comment-4-6',
        postId: 'post-4',
        authorName: '원칙주의',
        content: '의사선생님은 아무때나 괜찮다고 하셨어요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 6)
    },
    {
        id: 'comment-4-7',
        postId: 'post-4',
        authorName: '국룰',
        content: '저녁에 맞고 자는게 국룰 아닌가요? ㅎㅎ',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 7)
    },
    {
        id: 'comment-4-8',
        postId: 'post-4',
        authorName: '주말러',
        content: '주말에 약속 없으면 금요일, 있으면 일요일 저녁 추천!',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 8)
    },
    {
        id: 'comment-4-9',
        postId: 'post-4',
        authorName: '마이웨이',
        content: '시간은 상관없고 요일만 잘 지키면 된다고 들었어요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 9)
    },
    {
        id: 'comment-4-10',
        postId: 'post-4',
        authorName: '쉼표',
        content: '저는 주사 맞는 날 운동은 쉬어요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 10)
    },
    {
        id: 'comment-4-11',
        postId: 'post-4',
        authorName: '하루시작',
        content: '아침에 맞으면 하루종일 식욕조절이 잘 돼서 좋은 것 같아요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 11)
    },
    {
        id: 'comment-4-12',
        postId: 'post-4',
        authorName: '개취존중',
        content: '다들 의견이 다르네요. 그냥 자기한테 맞는게 최고인듯!',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 12)
    },
    {
        id: 'comment-4-13',
        postId: 'post-4',
        authorName: '알람봇',
        content: '알람 맞춰놓고 같은 시간에 맞는게 제일 좋대요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 13)
    },
    {
        id: 'comment-4-14',
        postId: 'post-4',
        authorName: '정보감사',
        content: '이런 꿀팁 공유 너무 좋아요!',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 14)
    },
    {
        id: 'comment-4-15',
        postId: 'post-4',
        authorName: '귀차니스트',
        content: '저는 그냥 병원 갔다온 날 바로 맞아요.',
        createdAt: new Date(Date.now() - 86400000 * 7 + 3600000 * 15)
    }
];
}}),
"[project]/src/components/layout/header.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/layout/header.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/header.tsx <module evaluation>", "default");
}}),
"[project]/src/components/layout/header.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/layout/header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/layout/header.tsx", "default");
}}),
"[project]/src/components/layout/header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/layout/footer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t bg-background/80 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container py-4 text-center text-xs text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-bold",
                            children: '“본 서비스는 정보 제공을 위한 크라우드소싱 플랫폼입니다. 의료행위/처방/구매 유도가 아니며, 정보의 정확성·최신성·완전성을 보장하지 않습니다."'
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 8,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: '"실제 취급 여부·가격·재고는 수시로 변경될 수 있으므로 방문 전 반드시 해당 기관에 직접 확인하시기 바랍니다. 건강 관련 결정은 의료 전문가와 상담하십시오.”'
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 11,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/footer.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " GLP 트래커 — 서울/분당/동탄 베타"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/guide",
                                    className: "hover:text-primary",
                                    children: "이용 안내 / 법적 고지"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 21,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "데이터는 사용자 제보 기반으로 수집됩니다."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/footer.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/community/comment-section.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/community/comment-section.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/community/comment-section.tsx <module evaluation>", "default");
}}),
"[project]/src/components/community/comment-section.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/community/comment-section.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/community/comment-section.tsx", "default");
}}),
"[project]/src/components/community/comment-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$community$2f$comment$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/community/comment-section.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$community$2f$comment$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/community/comment-section.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$community$2f$comment$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/community/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CommunityPostPage),
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-rsc] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-rsc] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-rsc] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$community$2f$comment$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/community/comment-section.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["communityPosts"].find((p)=>p.id === params.id);
    if (!post) {
        return {
            title: 'Post Not Found'
        };
    }
    return {
        title: post.title,
        description: post.content.substring(0, 150),
        alternates: {
            canonical: `/community/${post.id}`
        }
    };
}
function CommunityPostPage({ params }) {
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["communityPosts"].find((p)=>p.id === params.id);
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const formattedDate = new Date(post.createdAt).toLocaleDateString('ko-KR');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/community/[id]/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 bg-muted/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto py-8 md:py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/community",
                                    passHref: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 25
                                            }, this),
                                            "목록으로 돌아가기"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/community/[id]/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/[id]/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                lineNumber: 50,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-2xl font-headline",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 text-sm text-muted-foreground pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 67
                                                            }, this),
                                                            post.author
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/community/[id]/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 27
                                                            }, this),
                                                            formattedDate
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/community/[id]/page.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/community/[id]/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "prose prose-sm max-w-none text-foreground/90 leading-relaxed",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: post.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/community/[id]/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/community/[id]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardFooter"], {
                                        className: "flex justify-between items-center bg-muted/50 py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-sm text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/community/[id]/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 81
                                                        }, this),
                                                        " ",
                                                        post.votes,
                                                        " Votes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/community/[id]/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/community/[id]/page.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 81
                                                        }, this),
                                                        " ",
                                                        post.commentsCount,
                                                        " Comments"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/community/[id]/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/community/[id]/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/community/[id]/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$community$2f$comment$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    postId: post.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/community/[id]/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/community/[id]/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/community/[id]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/community/[id]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/community/[id]/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/community/[id]/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/community/[id]/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/community/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/community/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_f279a85d._.js.map