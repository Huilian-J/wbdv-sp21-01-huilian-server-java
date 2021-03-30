package com.example.wbdvsp2101huilianserverjava.services;

import com.example.wbdvsp2101huilianserverjava.models.Widget;
import com.example.wbdvsp2101huilianserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    public Widget createWidget(String tid, Widget widget) {
        widget.setTopicId(tid);

        return repository.save(widget);
    }
    public List<Widget> findAllWidgets() {
        return (List<Widget>) repository.findAll();
    }
    public List<Widget> findWidgetsForTopic(String tid) {
        return repository.findWidgetsForTopic(tid);
    }
    public Integer updateWidget(Long wid, Widget widget) {
        Widget originalWidget = repository.findById(wid).get();
        // TODO: copy all the other fields testing for null
        originalWidget.setId(widget.getId());
        originalWidget.setTopicId(widget.getTopicId());
        originalWidget.setType(widget.getType());
        originalWidget.setSize(widget.getSize());
        originalWidget.setText(widget.getText());
        repository.save(originalWidget);
        return 1;
    }
    public Integer deleteWidget(Long wid) {
        repository.deleteById(wid);
        return 1;
    }
    public Widget findWidgetById(Long wid) {
        return repository.findById(wid).get();
    }
}
