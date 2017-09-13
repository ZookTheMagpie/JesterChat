package no.ntnu.berg.jesterchat;

import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import org.glassfish.jersey.media.multipart.MultiPartFeature;

/**
 * 
 * @author Alexander Eilert Berg
 */
@ApplicationPath("api")
public class RestConfig extends Application
{
    @Override
    public Set<Class<?>> getClasses()
    {
        Set<Class<?>> resources = new HashSet<>();
        resources.add(MultiPartFeature.class);
        addRestResourceClasses (resources);
        return resources;
    }
    
    private void addRestResourceClasses(Set<Class<?>> resources) 
    {
        resources.add(no.ntnu.berg.jesterchat.ForumService.class);
        resources.add(no.ntnu.berg.jesterchat.PictureService.class);
    }
}
