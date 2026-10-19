from rest_framework.views import APIView
from .models import About
from .serializer import AboutSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny , IsAdminUser
from rest_framework import status
import logging

logger = logging.getLogger(__name__) 
class AboutView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        try:
            about = About.objects.first()
            serializer = AboutSerializer(about)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Exception as e:
            logger.error("no response", exc_info=True)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    def post(self, request):
        try:
            serializer = AboutSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            logger.error("no response", exc_info=True)
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    def delete(self, request ):
        try:
            about = About.objects.all()
            if about:
                about.delete()
                return Response({"message": "About deleted successfully."}, status=status.HTTP_200_OK)
            return Response({"error": "About not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)