define({ "api": [
  {
    "type": "get",
    "url": "api/v3/course/all",
    "title": "all",
    "group": "Cours",
    "description": "<p>Récupérer la liste de tous les cours</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSDON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { id: string, prealable: string, titre: string } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/CourseRouter.ts",
    "groupTitle": "Cours",
    "name": "GetApiV3CourseAll"
  },
  {
    "type": "get",
    "url": "api/v3/Schedule/all",
    "title": "all",
    "group": "Schedule",
    "description": "<p>Récupérer la liste de tous les Schedules</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { group_id: string, day: string, hours: string, activity: string, mode: string, local: string, teacher_id: string } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/ScheduleRouter.ts",
    "groupTitle": "Schedule",
    "name": "GetApiV3ScheduleAll"
  },
  {
    "type": "get",
    "url": "api/v3/session/all",
    "title": "all",
    "group": "Session",
    "description": "<p>Récupérer la liste de toutes les sessions</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[ { id: string, name: string, start: string, end: string, } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/SessionRouter.ts",
    "groupTitle": "Session",
    "name": "GetApiV3SessionAll"
  },
  {
    "type": "get",
    "url": "api/v3/student/all",
    "title": "all",
    "group": "Student",
    "description": "<p>récupération de tout les enseignant</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>[{ first_name: string, last_name: string, id: string that match email } ]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/StudentRouter.ts",
    "groupTitle": "Student",
    "name": "GetApiV3StudentAll"
  },
  {
    "type": "get",
    "url": "api/v3/student/fromtoken",
    "title": "fromtoken",
    "group": "Student",
    "description": "<p>Récupérer un étudiant à partir de son token</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>{ first_name: string, last_name: string, id: string, }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/StudentRouter.ts",
    "groupTitle": "Student",
    "name": "GetApiV3StudentFromtoken"
  },
  {
    "type": "get",
    "url": "api/v3/student/login?email=email&password=password",
    "title": "login",
    "group": "Student",
    "description": "<p>Authentification de l'étudiant et récupération du token d'authentification</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>courriel de l'étudiant.  Vous devez encoder email avec https://www.w3schools.com/tags/ref_urlencode.ASP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>non vérifier.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token à inclure dans les requêtes subséquentes</p>"
          },
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>{first_name: string, last_name: string, id: string}</p>"
          }
        ]
      }
    },
    "filename": "src/routes/StudentRouter.ts",
    "groupTitle": "Student",
    "name": "GetApiV3StudentLoginEmailEmailPasswordPassword"
  },
  {
    "type": "get",
    "url": "api/v3/teacher/all",
    "title": "all",
    "group": "Teacher",
    "description": "<p>récupération de tout les enseignant</p>",
    "version": "3.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>[{ first_name: string, last_name: string, id: string }]</p>"
          }
        ]
      }
    },
    "filename": "src/routes/TeacherRouter.ts",
    "groupTitle": "Teacher",
    "name": "GetApiV3TeacherAll"
  },
  {
    "type": "get",
    "url": "api/v3/teacher/fromtoken",
    "title": "fromtoken",
    "group": "Teacher",
    "description": "<p>Récupérer un enseignant à partir de son token</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>{ first_name: string, last_name: string, id: string, }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/TeacherRouter.ts",
    "groupTitle": "Teacher",
    "name": "GetApiV3TeacherFromtoken"
  },
  {
    "type": "get",
    "url": "api/v3/teacher/login?email=email&password=password",
    "title": "login",
    "group": "Teacher",
    "description": "<p>Authentification de l'usager et récupération du token d'authentification</p>",
    "version": "3.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>courriel de l'usager.  Vous devez encoder email avec https://www.w3schools.com/tags/ref_urlencode.ASP</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>non vérifier.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentification token à inclure dans les requêtes subséquentes</p>"
          },
          {
            "group": "200",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>{ first_name:string, last_name: string, id: string }</p>"
          }
        ]
      }
    },
    "filename": "src/routes/TeacherRouter.ts",
    "groupTitle": "Teacher",
    "name": "GetApiV3TeacherLoginEmailEmailPasswordPassword"
  }
] });