def test_missing_page(client):
    response = client.get('/')
    assert response.status_code == 404