# Workupy - Test - Backend

O desafio deste teste é completar a consulta na rota da API.

É obrigatório que o JSON retornado siga o seguinte schema e apresente todos os
dados das tabelas:

```json
{
  "user": {
    "id": 1,
    "name": "Name",
    "username": "username",
    "email": "email@email.com",
    "password": "********",
    "projects": [
      {
        "id": 1,
        "user_id": 1,
        "name": "Name",
        "slug": "project",
        "pages": [
          {
            "id": 1,
            "project_id": 1,
            "name": "Name",
            "title": "Title",
            "path": "page",
            "index": true,
            "elements": [
              {
                "id": 1,
                "uuid": "XX-XX-XX",
                "page_id": 1,
                "parent_id": null,
                "name": "Name",
                "tag": "tag",
                "x": 0,
                "y": 1,
                "attr": [
                  {
                    "id": 1,
                    "element_id": 1,
                    "{attribute}": "{value}"
                  }
                ],
                "style": [
                  {
                    "id": 1,
                    "element_id": 1,
                    "{property}": "{value}{unit}"
                  }
                ]
              },
              {
                "id": 2,
                "uuid": "XX-XX-XX",
                "page_id": 1,
                "parent_id": 1,
                "name": "Name",
                "tag": "tag",
                "x": 1,
                "y": 2,
                "attr": [
                  {
                    "id": 2,
                    "element_id": 2,
                    "{attribute}": "{value}"
                  }
                ],
                "style": [
                  {
                    "id": 2,
                    "element_id": 2,
                    "{property}": "{value}{unit}"
                  }
                ]
              }
            ]
          }
        ],
      }
    ],
  }
}
```

Considere os campos entre chaves `{}` como o valor da coluna no banco de dados,
como, por exemplo:

```json
{
  "attr": [
    {
      "id": 99,
      "element_id": 15,
      "type": "button"
    }
  ],
  "style": [
    {
      "id": 75,
      "element_id": 15,
      "text-align": "center"
    },
    {
      "id": 77,
      "element_id": 15,
      "margin": "2px"
    }
  ]
}
```
