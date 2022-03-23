import os
import requests


# services permet de faire la liaison entre notre api et l'affchage


def get_users():
    url = "http://127.0.0.1:4000/api/v1/users/"
    #definis une variable qui contient notre get
    r = requests.get(url, headers={'Accept': 'application/json'})
    users = r.json()
    return users
