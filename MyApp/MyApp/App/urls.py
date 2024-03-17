from rest_framework import routers
from views import TodoViewsSet


router = routers.DefaultRouter()
router.register('api/todo', TodoViewsSet, basename='App')   # Регестрируем преставление TodoViewsSet для URL адреса api/todo 

urlpatterns = router.urls